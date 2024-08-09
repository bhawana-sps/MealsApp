import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { ImageBackground, View } from "react-native"
import splashImage from "../assets/splash.png";

function Splash() {
    const navigation = useNavigation()
    useEffect(() => {
        const timer = setTimeout(() => {

            navigation.replace("DrawerNavigation")
        }, 2000)

        return () => clearTimeout(timer);
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: "cover" }}  source={splashImage}></ImageBackground>
        </View>
    )
}

export default Splash