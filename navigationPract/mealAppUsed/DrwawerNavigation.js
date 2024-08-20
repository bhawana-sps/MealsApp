import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import Favourite from "../../screens/Favourite";
import { Alert, BackHandler } from "react-native";
import { BottomNavigation } from "./BottomNavigation";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import PieChartScreen from "../../screens/PieChartScreen";
import ImageStyle from "../../componenets/ImageStyle";
import Color from "../../util/Color";
import { categoryImg, wishListImg } from "../../util/ImageConstant";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    const { navigation } = props;

    const handleLogout = async () => {
        Alert.alert("Logout", "Are you sure you want to logout?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel",
            },
            {
                text: "YES",
                onPress: async () => {
                    try {
                        // Clear user data from AsyncStorage
                        await AsyncStorage.removeItem('userEmail');
                        console.log('User logged out');
                        // Navigate back to login screen
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }], 
                        });
                    } catch (error) {
                        console.error('Error logging out:', error);
                    }
                },
            },
        ]);
    };

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{ backgroundColor: Color.color_351401, marginTop: 50 }}
            style={{ backgroundColor: Color.color_351401 }}
        >
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                onPress={handleLogout}
                icon={({ focused }) => (
                    <ImageStyle image={wishListImg} tintColor={focused ? Color.color_351401 : "white"} />
                )}
                labelStyle={{ color: "white" }}
            />
        </DrawerContentScrollView>
    );
}

function DrawerNavigation() {
    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel",
            },
            { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
    };

    useFocusEffect(
        React.useCallback(() => {
            const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => backHandler.remove();
        }, [])
    );

    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Color.color_351401 },
                headerTintColor: "white",
                headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
                headerTitleAlign: "center",
                drawerContentContainerStyle: { marginTop: 50 },
                sceneContainerStyle: { backgroundColor: Color.color_3f2f25 },
                drawerContentStyle: { backgroundColor: Color.color_351401 },
                drawerInactiveTintColor: "white",
                drawerActiveTintColor: Color.color_351401,
                drawerActiveBackgroundColor: Color.color_e4baa1,
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="BottomNavigation"
                component={BottomNavigation}
                options={{
                    title: "Home",
                    drawerIcon: ({ focused }) => (
                        <ImageStyle image={categoryImg} tintColor={focused ? Color.color_351401 : "white"} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favourites"
                component={Favourite}
                options={{
                    drawerIcon: ({ focused }) => (
                        <ImageStyle image={wishListImg} tintColor={focused ? Color.color_351401 : "white"} />
                    ),
                }}
            />
            <Drawer.Screen
                name="PieChart"
                component={PieChartScreen}
                options={{
                    drawerIcon: ({ focused }) => (
                        <ImageStyle image={wishListImg} tintColor={focused ? Color.color_351401 : "white"} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;
