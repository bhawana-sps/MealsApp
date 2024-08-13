import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useLayoutEffect, useState } from "react"
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { getRecepiDetailApi } from "../apiCalls/api"
import IconButton from "../../componenets/IconButton"
import Loader from "./Loader"
import DashedLine from "react-native-dashed-line"
import Subtitle from "../../componenets/Subtitle"
import List from "../../componenets/List"
import Color from "../../util/Color"
import { redBackground, starImage } from "../../util/ImageConstant"


function RecepiDetailScreen() {
    const [recepiDetail, setrecepiDetail] = useState({})
    const [isloading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const isFocused = useIsFocused()
    const route = useRoute()
    const navigation = useNavigation();
    const recepiId = route.params.recepiId
    useEffect(() => {

        const fetchData = async () => {
            try {
                console.log("data")
                const data = await getRecepiDetailApi(recepiId)
                setrecepiDetail(data)
                navigation.setOptions({ title: data.name });
                console.log(data)
            }
            catch (error) {
                console.log(recepiId)
                setError(error.message)
            }
            finally {
                setLoading(false)
            }

        }
        if (isFocused) {
            setLoading(true); // Reset loading state when screen is focused
            fetchData();
        }
    }, [isFocused, navigation])
    if (isloading) return <ActivityIndicator style={{ alignItems: "center" }} size="large" color={Color.color_e4baa1} />
    if (error) return <Text>{error}</Text>;
    return (
        <ScrollView>
            <View style={style.rootContainer}>

                <View style={style.innerContainer}>
                    <View style={{ zIndex: 1 }}>
                        <Image resizeMethod="auto" style={style.imageStyle} src={recepiDetail.image} />

                        <View style={[style.overlayStyle,{bottom:0}]}>
                            <Image style={style.imageSizeStyle} tintColor={Color.color_845e1b}
                                source={redBackground} />
                            <Text style={[style.ratingTextStyle, { color: Color.color_845e1b}]}>
                                {recepiDetail.cuisine} Dish</Text>
                        </View>
                        <View style={[style.overlayStyle, {top:0}]}>
                            <Image style={style.imageSizeStyle} tintColor={Color.color_845e1b}
                                source={redBackground} />
                            <Text style={[style.ratingTextStyle, { color: Color.color_845e1b}]}>
                                {recepiDetail.caloriesPerServing} Cal
                            </Text>
                        </View>
                    </View>
                    <View style={style.titleViewStyle}>
                        <Text style={style.headingStyle} numberOfLines={1} ellipsizeMode="tail">{recepiDetail.name.toString()} </Text>
                        <View style={style.ratingContainerStyle}>
                            <Image tintColor="white" source={starImage} />
                            <Text style={style.ratingTextStyle}>{recepiDetail.rating}
                                <Text style={{ color: Color.color_ccc }}> ({recepiDetail.reviewCount})</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <DashedLine style={style.dashlineStyle} dashLength={4} dashGap={4} dashThickness={1.5} dashColor={Color.color_e4baa1} />
                <Subtitle >Ingredients</Subtitle>
                <List data={recepiDetail.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={recepiDetail.instructions} />

            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    rootContainer: {
        paddingBottom: 18,
        marginVertical: 15,
        flex: 1,
        marginHorizontal: 18,
        borderRadius: 20,
        elevation: 5,
        shadowColor: "white",
        // height: 250,
        backgroundColor: Color.color_351401,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    },
    imageSizeStyle:{ height: 15, width: 15 },
    titleViewStyle: {
        padding: 16,
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    innerContainer: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20
    },
    imageStyle: {
        width: "100%",
        height: 180,
        backgroundColor: Color.color_aba9a9,
        // aspectRatio: 135 / 76,
        resizeMode: 'contain',
        // flexWrap: 'wrap'
    },
    headingStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        flex: 1,
        adjustsFontSizeToFit: true,
        selectable: true
    },
    overlayStyle: {
        marginTop:15,
        marginStart: 12,
        marginBottom: -10,
        backgroundColor: "white",
        left: 0,
        // bottom: 0,
        position: "absolute",
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 6,
        paddingHorizontal: 4
    },
    ratingContainerStyle: {
        backgroundColor: "green",
        borderRadius: 8,
        alignItems: "center",
        // justifyContent:"center",
        flexDirection: "row",
        paddingVertical: 6,
        paddingHorizontal: 4,
    },
    ratingTextStyle: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
       paddingHorizontal:6
    },
    dashlineStyle:{ marginTop: 20, marginBottom: 15 }
})
export default RecepiDetailScreen