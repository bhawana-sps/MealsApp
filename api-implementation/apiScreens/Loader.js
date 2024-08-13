import { ActivityIndicator, StyleSheet, View } from "react-native"
import Color from "../../util/Color"


function Loader() {
    return (
        <View style={style.loaderStyle}>
            <ActivityIndicator size="large" color={Color.color_351401} />
        </View>

    )
}
const style = StyleSheet.create({
    loaderStyle: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    }
})
export default Loader