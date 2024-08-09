import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import DashedLine from "react-native-dashed-line"
import LinearGradient from "react-native-linear-gradient"

function MealItem({ title, imageUrl, rating, type, cusine, cost, discount, isVeg, duration, isNear, isAward, isGultanFree, isVegan,mealId }) {
   
        const navigate = useNavigation();
        function handleOnNavigate(){
         navigate.navigate("MealDetail",{
             mealId:mealId
         });
        }
    
    return (
        <View style={style.container}>
            <Pressable   style={(press) => [{flex:1}, press.pressed ? style.pressables : null]}
                android_ripple={{ color: "#ccc" }} onPress={handleOnNavigate}>
                <View style={style.innerContainer}>
                    <LinearGradient style={{ flex: 1 }} start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }} colors={["#f8f3ec", "#f7d7aa"]}>
                        {isAward &&
                            <View style={{
                                flexDirection: "row", paddingVertical: 8, marginLeft: 12, marginRight: 5,
                                alignItems: "center"
                            }}>
                                <Image style={{ paddingEnd: 5 }} source={require("../assets/rating_star.png")} />
                                <Text style={style.detailText}>Best in Pizza - Restaurant Awards in 2024</Text>
                            </View>
                        }
                        <View style={{ zIndex: 1 }}>
                            <Image source={{ uri: imageUrl }} style={style.imageStyle} />

                            <View style={style.overlayStyle}>
                                <Image style={{
                                     width: 100
                                }} imageStyle={{ resizeMode: 'contain'}}
                                    source={require("../assets/badge_ic.png")} tintColor={isVegan ? "green" : null} />
                                <Text style={{
                                    position: 'absolute',
                                    backgroundColor: 'transparent',
                                    alignItems: "center", color: "white", fontSize: 14, fontWeight: "500"
                                }}>{isVegan ? 'VEGAN' : 'NOT VEGAN'}</Text>
                            </View>

                            <View style={[style.overlayStyle, { right: 0 }]}>
                                <Image source={isVeg ? require("../assets/veg.png") : require("../assets/non_veg.png")} />
                            </View>
                            {isNear && (
                                <View style={[style.overlayStyle, {
                                    left: 0, bottom: 0, borderRadius: 8, backgroundColor: "#e2fae2",
                                    paddingVertical: 4, paddingHorizontal: 10, marginBottom: 30
                                }]}>
                                    <Image style={{ height: 15, width: 15 }} tintColor="#095f16"
                                        source={require("../assets/flash_sale.png")} />
                                    <Text style={style.greenTextColorStyle}>NEAR & FAST</Text>

                                </View>
                            )}
                            <View style={[style.overlayStyle, {
                                left: 0, bottom: 0, borderTopRightRadius: 18, backgroundColor: "#ffffff",
                                paddingVertical: 4, paddingRight: 15, paddingLeft: 10,
                                margin: 0, marginBottom: -10, marginLeft: 0
                            }]}>
                                <Text style={[style.detailText, { marginLeft: 0, marginRight: 4 }]}>{duration.split(",")[0]}</Text>
                                <Text style={[style.dotText, { marginHorizontal: 0 }]}>.</Text>
                                <Text style={[style.detailText, { marginLeft: 4, marginRight: 0 }]}>{duration.split(",")[1]}</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: "white" }}>
                            <View style={style.titleContainer}>
                                <Text style={style.titleText} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
                                <View style={[style.ratingContainer, { backgroundColor: rating > 3 ? "green" : "red" }]}>
                                    <Image style={{ height: 10, width: 10 }} tintColor="white"
                                        source={require("../assets/rating_star.png")} />
                                    <Text style={style.ratingTextStyle}>{rating}</Text>
                                </View>
                            </View>
                            <View style={[style.titleContainer, { marginLeft: 3,marginRight:3 }]}>
                                <Text style={style.detailText}>{type}</Text>
                                <Text style={style.dotText}  numberOfLines={1} ellipsizeMode="tail">.</Text>
                                <Text style={style.detailText}>{cusine}</Text>
                                <Text style={style.dotText}>.</Text>
                                <Text style={style.detailText}>{cost}</Text>
                                {isGultanFree &&
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <View style={{ borderColor: "grey", borderWidth: 0.4, height: 16, marginLeft: 10, marginRight: 4 }} />
                                        <Text style={style.detailText}>Gultan Free</Text>
                                    </View>
                                }
                            </View>
                            <DashedLine style={{ marginTop: 10, marginHorizontal: 4 }} dashLength={4} dashGap={4} dashThickness={1} dashColor="grey" />
                            <View style={[style.titleContainer, { marginBottom: 8, marginTop: 10 }]}>
                                <Image style={{ marginLeft: 5, marginRight: 2, width: 15, height: 15 }} resizeMethod="scale" tintColor="blue" source={require("../assets/discount_icon.png")}  />
                                <Text style={{ color: "blue", paddingHorizontal: 2, fontSize: 12 }}>{discount} </Text>
                            </View>
                        </View>
                        {/* <View style={style.viewDashStyle}/> */}
                    </LinearGradient>
                </View>
            </Pressable>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 5,
        backgroundColor: "white",
        borderRadius: 20,
        elevation: 4,
        marginHorizontal: 16,
        marginVertical: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    pressables: {
        opacity: 0.85

    },
    imageStyle: {
        width: "100%",
        height: 180,
        resizeMode: "auto",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    innerContainer: {
        borderRadius: 8,
        flex: 1,
        flexDirection: "column"
    },
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 8,
        alignItems: "center",
        flexWrap: 'nonwrap',

    },
    ratingContainer: {
        backgroundColor: "green",
        flexDirection: "row",
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginHorizontal: 6,
        maxHeight: 30,
        alignItems: "center"
    },
    ratingTextStyle: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        marginStart: 4
    },
    titleText: {
        flex: 1,
        textAlign: "left",
        marginHorizontal: 6,
        fontSize: 17,
        fontWeight: "bold",
        color: "black",
        allowFontScaling: false
    },
    detailText: {
        marginLeft: 3,
        fontSize: 13,
        fontWeight: "500",
        allowFontScaling: true,
        color: "#a5a1a1"

    },
    dotText: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: -16,
        marginLeft: 3,
        allowFontScaling: false,
        color: "#a5a1a1",flexShrink: 1,
    
    },
    viewDashStyle: {
        marginVertical: 5,
        borderStyle: "dashed",
        borderWidth: 0.5,
        borderColor: "grey"
    },
    overlayStyle: {
        marginTop: 13,
        marginHorizontal: 12,
        marginBottom: 12,
        position: 'absolute',
        backgroundColor: 'transparent',
        flexDirection: "row",
        alignItems: "center", justifyContent: "center",
    },
    greenTextColorStyle: {
        color: "#095f16",
        fontWeight: "500",
        fontSize: 12,
        paddingLeft: 8,
        allowFontScaling: false
    }

})
export default MealItem