import { Image, StyleSheet } from "react-native"
import Color from "../util/Color"

function ImageStyle({image, tintColor= Color.color_351401 }){
    return(
        <Image  style={[style.imageStyle, { tintColor }]}  resizeMethod="auto" source={image} />
    )
}

const style = StyleSheet.create({
    imageStyle: {
        width: 27,
        height: 27,
        // tintColor: Color.color_351401,
        backgroundColor:"transparent"
    },
})
export default ImageStyle