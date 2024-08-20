import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { ImageBackground, View } from "react-native"
import splashImage from "../assets/splash.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        const checkUserStatus = async () => {
            try {
                const userEmail = await AsyncStorage.getItem('userEmail')
                
                if (userEmail) {
                  
                    navigation.replace("DrawerNavigation");  
                } else {
                   
                    navigation.replace("Login");
                }
            } catch (error) {
                console.error('Error retrieving user email from AsyncStorage:', error);
              
                navigation.replace("Login");
            }
        };

        const timer = setTimeout(() => {
            checkUserStatus();
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: "cover" }}  source={splashImage}></ImageBackground>
        </View>
    )
}

export default Splash