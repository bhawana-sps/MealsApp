import { View,Image,Text,StyleSheet } from "react-native"
import LinearGradient from "react-native-linear-gradient"


function MealImageItem({mealObject}){
return(
    <View style={{ zIndex: 1 }}>
          <Image style={style.imageStyle} source={{ uri: mealObject.imageUrl }} />
          <Image style={[style.overlayStyle, {
            right: 0,
            top: 0
          }]}
            source={mealObject.isVegetarian ? require("../assets/veg.png") : require("../assets/non_veg.png")} />
          <LinearGradient style={[style.overlayStyle, {marginBottom:-17,paddingHorizontal: 10, borderRadius: 8, paddingVertical: 5, bottom: 0 }]}
            colors={["#8d8830", "#3f3601"]} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Text style={style.durationTextStyle}>{mealObject.duration.split(",")[0]}</Text>
              <Text style={style.dotTextStyle}>.</Text>
              <Text style={style.durationTextStyle}>{mealObject.duration.split(",")[1]}</Text>
            </View>
          </LinearGradient>
          <View style={[style.overlayStyle, { alignItems: "center" }]}>
            <Image style={{ width: 100 }} imageStyle={{ resizeMode: 'contain' }} source={require("../assets/badge_ic.png")}
              tintColor={mealObject.isVegan ? "green" : null} />
            <Text style={{
              position: "absolute", backgroundColor: 'transparent',
              alignItems: "center", color: "white", fontSize: 13, fontWeight: "500"
            }}
            >{mealObject.isVegan ? 'VEGAN' : 'NOT VEGAN'}</Text>
          </View>
        </View>
)
}
const style = StyleSheet.create({
    imageStyle: {
        height: 300,
        width: "100%",
        // resizeMode: "center"
      },
      overlayStyle: {
        position: "absolute",
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
      },
      dotTextStyle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginTop: -14,
        paddingHorizontal: 5
      },
      durationTextStyle: {
        fontSize: 13,
        color: "white",
        fontWeight: "600",
        textAlign: "center",
      }
})
 export default MealImageItem