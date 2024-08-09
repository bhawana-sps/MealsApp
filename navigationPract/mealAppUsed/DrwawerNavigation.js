import { createDrawerNavigator } from "@react-navigation/drawer"
import CategoriesScreen from "../../screens/CategoriesScreen"
import Favourite from "../../screens/Favourite"
import { Alert, BackHandler, Image, View } from "react-native"
import { BottomNavigation } from "./BottomNavigation"
import { useFocusEffect } from "@react-navigation/native"
import React, { useEffect } from "react"

function imageContainer(image) {
    return (
        <View>
            <Image style={{ height: 28, width: 28 }} source={image} />
        </View>
    )
}
const drawer = createDrawerNavigator()

function DrwawerNavigation({ navigation }) {
    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to exit the app?",[
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel",
            },
            { text: "YES", onPress: () => BackHandler.exitApp() },
        ])
        return true;
    }
    useFocusEffect(
         React.useCallback(()=>{
           const backHandler=BackHandler.addEventListener("hardwareBackPress",backAction)
           return()=> backHandler.remove()
         },[])
    )
    // useFocusEffect(
    //     React.useCallback(() => {
    //         const routeName = navigation.getState().routes[navigation.getState().index].name;
    //         const titles = {
    //             Categories: 'All Categories',
    //             AllRecipies: 'All Recepies',
    //         };
    //         navigation.setOptions({ title: titles[routeName] || 'Categories' });
    //     }, [navigation])
    // );
    return (

        <drawer.Navigator screenOptions={
            {
                headerStyle: { backgroundColor: "#351401", },
                headerTintColor: "white",
                headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
                headerTitleAlign: "center",
                drawerContentContainerStyle: { marginTop: 50 },
                sceneContainerStyle: { backgroundColor: "#3f2f25" },
                drawerContentStyle: { backgroundColor: "#351401" },
                drawerInactiveTintColor: "white",
                drawerActiveTintColor: "#351401",
                drawerActiveBackgroundColor: '#e4baa1',
            }
        }>
             <drawer.Screen name="BottomNavigation" component={BottomNavigation} options={{
                
                title: "Home",
                drawerIcon: ({ color, size }) => (
                    imageContainer(require("../../assets/category.png"))
                ),
            }} />
            
            {/* <drawer.Screen name="Categories" component={CategoriesScreen} options={{
                title: "All Categories",
                drawerIcon: ({ color, size }) => (
                    imageContainer(require("../../assets/category.png"))
                ),
            }} /> */}
            <drawer.Screen name="Favourites" component={Favourite} options={{
                drawerIcon: ({ color, size }) => (
                    imageContainer(require("../../assets/wishlist.png"))
                ),
            }} />
        </drawer.Navigator>
    )
}
export default DrwawerNavigation