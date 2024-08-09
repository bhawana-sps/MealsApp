import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "../../screens/CategoriesScreen";
import AllRecepiesScreen from "../../api-implementation/apiScreens/AllRecepiesScreen";
import StackNav from "./StackNav";
import { Drawer } from "react-native-paper";
import DrwawerNavigation from "./DrwawerNavigation";
import { Image,View } from "react-native";

function imageContainer(image) {
    return (
        <View>
            <Image style={{ height: 28, width: 28 }} source={image} />
        </View>
    )
}
export function BottomNavigation({navigation}){
    const bottom = createBottomTabNavigator()
    return (
        <bottom.Navigator sceneContainerStyle={{backgroundColor:"#3f2f25"}} screenOptions={
            {
                tabBarIcon: () => null,
                tabBarStyle: {
                    backgroundColor: "#351401",
                    height:45,
                    alignItems:"center",justifyContent:"center"
                  },
                  tabBarLabelPosition:"beside-icon",
                  headerShown:false,
                  tabBarActiveTintColor:"#351401",
                  tabBarInactiveTintColor:"white",
                  tabBarActiveBackgroundColor:"#e4baa1",
                  tabBarLabelStyle :{
                    fontSize:12,
                    fontWeight:"bold",alignItems: 'center',justifyContent:"center",textAlign:"center"
                    // marginBottom:10
                  }
            }
        }
        >
            {/* <DrwawerNavigation/> */}
            {/* <bottom.Screen name="DrwawerNavigation" component={DrwawerNavigation}/> */}
            <bottom.Screen name="Categories" component={CategoriesScreen} options={{
                // title: "Categories",
                // tabBarIcon: ({ color, size }) => (
                //     imageContainer(require("../../assets/category_icon.png"))
                // ),
            }}/>
            <bottom.Screen name="AllRecipies" component={AllRecepiesScreen} options={{
                 title: "Recepies",
                //  tabBarIcon: ({ color, size }) => (
                //      imageContainer(require("../../assets/recipe.png"))
                //  ),
            }}/>
        </bottom.Navigator>
    )
}