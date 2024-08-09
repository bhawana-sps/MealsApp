import React, { useState } from "react"
import { Image, StyleSheet, Text, View, Pressable } from "react-native"
import Loader from "./Loader"
import { useNavigation } from "@react-navigation/native"

const RecipeItemList = React.memo(({ item,index }) => {
    const navigation=useNavigation()
    function handleOnNavigate() {
        console.log("Pressed")
        navigation.navigate("RecepiDetailScreen",{
            recepiId:item.id
        })
    }
    const [isImageloading, setImageLoading] = useState({})
    const handleLoadStart = (index) => {
        setImageLoading((prevState) => ({ ...prevState, [index]: true }));
    };

    const handleLoadEnd = (index) => {
        setImageLoading((prevState) => ({ ...prevState, [index]: false }));
    };
    return (
        <View style={style.rootContainer}>
            <Pressable style={(press) => [{ flex: 1 }, press.pressed ? style.pressables : null]}
                android_ripple={{ color: "#ccc" }} onPress={handleOnNavigate}>
                <View style={style.innerContainer}>
                    <View style={{ zIndex: 1 }}>
                        <Image resizeMethod="auto" style={style.imageStyle} src={item.image} 
                        onLoadStart={() => handleLoadStart(index)}
                        onLoadEnd={() => handleLoadEnd(index)} />
                        {isImageloading[index] && <Loader />}
                        <View style={[style.ratingContainerStyle, { marginStart:12,marginBottom:-10,backgroundColor: "white", left: 0, 
                        bottom: 0, position: "absolute" }]}>
                                <Image style={{ height: 15, width: 15 }} tintColor="#845e1b"
                                        source={require("../../assets/flash_sale.png")} />
                            <Text style={[style.ratingTextStyle, { color: "#845e1b" ,paddingEnd:4}]}>{item.cuisine} Dish</Text>
                        </View>
                    </View>
                    <View style={{ padding: 16, marginTop: 8, flexDirection: "row", alignItems: "center" }}>
                        <Text style={style.headingStyle} numberOfLines={1} ellipsizeMode="tail">{item.name.toString()} </Text>
                        <View style={style.ratingContainerStyle}>
                            <Image tintColor="white" source={require("../../assets/rating_star.png")} />
                            <Text style={style.ratingTextStyle}>{item.rating} 
                                <Text style={{color:"#ccc"}}> ({item.reviewCount})</Text>
                                 </Text>
                        </View>
                    </View>
                </View>

            </Pressable>
        </View>
    )
});
const style = StyleSheet.create({
    rootContainer: {
        marginVertical: 15,
        flex: 1,
        marginHorizontal: 18,
        borderRadius: 20,
        elevation: 5,
        shadowColor: "white",
        // height: 250,
        backgroundColor: '#351401',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    },
    innerContainer: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20
    },
    pressables: {
        opacity: 0.85
    },
    imageStyle: {
        width: "100%",
        height: 180,
        backgroundColor: "#aba9a9",
        // aspectRatio: 135 / 76,
        resizeMode: 'contain',
        // flexWrap: 'wrap'
    },
    headingStyle: {
        fontSize: 17,
        fontWeight: "bold",
        color: "white",
        flex:1,
        adjustsFontSizeToFit:true,
        selectable:true
    },
    ratingContainerStyle:{
        backgroundColor:"green",
        borderRadius:8,
        alignItems:"center",
        // justifyContent:"center",
        flexDirection:"row",
        paddingVertical:6,
        paddingHorizontal:4
    },
    ratingTextStyle: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        marginStart: 4
    },
})
export default RecipeItemList