import { View, Text, Image, StyleSheet } from "react-native"
import DashedLine from "react-native-dashed-line"
import Subtitle from "./Subtitle"
import List from "./List"


function MealInfo({ mealObject }) {
    return (
        <View>
            <View style={{
                flexDirection: "row", flexWrap: 'nonwrap', alignItems: "center", marginTop: 40, flex: 1,
                marginBottom: 14,
            }}>
                <Text style={style.titleTextStyle} numberOfLines={1} ellipsizeMode="tail">{mealObject.title}</Text>
                <View style={[style.ratingContainerStyle,
                { textAlign: 'right', justifyContent: "flex-end", backgroundColor: mealObject.rating > 3 ? "green" : "red" }]}>
                    <Image style={{ height: 12, width: 12 }} tintColor="white" source={require("../assets/rating_star.png")} />
                    <Text style={style.ratingTextStyle}>{mealObject.rating}</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", flexWrap: 'nonwrap', alignItems: "center", flex: 1, marginBottom: 6, }}>
                <Text style={style.detailText}>{mealObject.type}</Text>
                <Text style={style.dotTextStyle} numberOfLines={1} ellipsizeMode="tail">.</Text>
                <Text style={style.detailText}>{mealObject.cusine}</Text>
                <Text style={style.dotTextStyle}>.</Text>
                <Text style={style.detailText}>{mealObject.cost}</Text>
                {mealObject.isGlutenFree &&
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ borderColor: "grey", borderWidth: 0.4, height: 16, marginLeft: 10, marginRight: 4 }} />
                        <Text style={style.detailText}>Gultan Free</Text>
                    </View>
                }
            </View>
            <View style={{ flexDirection: "row", flexWrap: 'nonwrap', alignItems: "center", flex: 1, marginBottom: 6, }}>
                <Text style={style.detailText}>{mealObject.affordability.toUpperCase()}</Text>
                <Text style={style.dotTextStyle} numberOfLines={1} ellipsizeMode="tail">.</Text>
                <Text style={style.detailText}>{mealObject.complexity.toUpperCase()}</Text>
            </View>
            <DashedLine style={{ marginTop: 20, marginBottom: 15 }} dashLength={4} dashGap={4} dashThickness={1} dashColor="grey" />
            <Subtitle >Ingredients</Subtitle>
            <List data={mealObject.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={mealObject.steps} />
        </View>
    )
}
const style = StyleSheet.create({
    titleTextStyle: {
        fontSize: 17,
        color: "#edebeb",
        fontWeight: "heavy",
        flex: 1
    },
    ratingTextStyle: {
        color: "white",
        alignItems: "center",
        fontSize: 12,
        fontWeight: "500",
        paddingStart: 5
    },
    ratingContainerStyle: {
        flexDirection: "row",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
        alignItems: "center"
    },
    dotTextStyle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginTop: -14,
        paddingHorizontal: 5
    },
    detailText: {
        marginLeft: 3,
        fontSize: 13,
        fontWeight: "500",
        allowFontScaling: true,
        color: "#a5a1a1",
        flexShrink: 1
    },
})
export default MealInfo