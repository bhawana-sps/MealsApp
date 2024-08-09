import { View,Text,StyleSheet } from "react-native"


function Subtitle({children}){
return(
    <View style={style.subtitleContainer}>
         <Text style={[style.titleTextStyle, { fontSize: 15.5, textAlign: "center" }]}>{children.toUpperCase()}</Text>
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
      subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
      },
})
export default Subtitle