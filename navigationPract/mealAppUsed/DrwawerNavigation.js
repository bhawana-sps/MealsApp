import { createDrawerNavigator } from "@react-navigation/drawer"
import CategoriesScreen from "../../screens/CategoriesScreen"
import Favourite from "../../screens/Favourite"
import { Alert, BackHandler, Image, View } from "react-native"
import { BottomNavigation } from "./BottomNavigation"
import { useFocusEffect } from "@react-navigation/native"
import React, { useEffect } from "react"
import PieChartScreen from "../../screens/PieChartScreen"
import ImageStyle from "../../componenets/ImageStyle"
import Color from "../../util/Color"

// function imageContainer(image) {
//     return (
//         <View>
//             <Image style={{ height: 28, width: 28 }} source={image} />
//         </View>
//     )
// }
const Drawer = createDrawerNavigator()

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

        <Drawer.Navigator screenOptions={
            {
                headerStyle: { backgroundColor: Color.color_351401, },
                headerTintColor: "white",
                headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
                headerTitleAlign: "center",
                drawerContentContainerStyle: { marginTop: 50 },
                sceneContainerStyle: { backgroundColor: Color.color_3f2f25 },
                drawerContentStyle: { backgroundColor:  Color.color_351401 },
                drawerInactiveTintColor: "white",
                drawerActiveTintColor: Color.color_351401,
                drawerActiveBackgroundColor:  Color.color_e4baa1,
            }
        }>
             <Drawer.Screen name="BottomNavigation" component={BottomNavigation} options={{
                
                title: "Home",
                drawerIcon: ({ focused }) => (
                    <ImageStyle image={require("../../assets/category.png")} tintColor={focused ? Color.color_351401 : "white"} />
                ),
            }} />
            
            {/* <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
                title: "All Categories",
                drawerIcon: ({ color, size }) => (
                    imageContainer(require("../../assets/category.png"))
                ),
            }} /> */}
            <Drawer.Screen name="Favourites" component={Favourite} options={{
                drawerIcon: ({ focused }) => (
                    <ImageStyle image={require("../../assets/wishlist.png")} tintColor={focused ? Color.color_351401 : "white"}/>
                ),
            }} />
            <Drawer.Screen name="PieChart" component={PieChartScreen} options={{
                drawerIcon: ({ focused }) => (
                    <ImageStyle image={require("../../assets/wishlist.png")} tintColor={focused ? Color.color_351401 : "white"}/>
                ),
            }} />
        </Drawer.Navigator>
    )
}
export default DrwawerNavigation