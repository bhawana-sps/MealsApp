import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "../../screens/CategoriesScreen";
import AllRecepiesScreen from "../../api-implementation/apiScreens/AllRecepiesScreen";
import StackNav from "./StackNav";
import { Drawer } from "react-native-paper";
import DrwawerNavigation from "./DrwawerNavigation";
import { Image,View } from "react-native";
import Color from "../../util/Color";

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
        <bottom.Navigator sceneContainerStyle={{backgroundColor:Color.color_3f2f25}} screenOptions={
            {
                tabBarIcon: () => null,
                tabBarStyle: {
                    backgroundColor: Color.color_351401,
                    height:45,
                    alignItems:"center",justifyContent:"center"
                  },
                  tabBarLabelPosition:"beside-icon",
                  headerShown:false,
                  tabBarActiveTintColor:Color.color_351401,
                  tabBarInactiveTintColor:"white",
                  tabBarActiveBackgroundColor:Color.color_e4baa1,
                  tabBarLabelStyle :{
                    fontSize:12,
                    fontWeight:"bold",alignItems: 'center',justifyContent:"center",textAlign:"center"
                    // marginBottom:10
                  }
            }
        }
        >
        
            <bottom.Screen name="Categories" component={CategoriesScreen} />
            <bottom.Screen name="AllRecipies" component={AllRecepiesScreen} options={{
                 title: "Recepies"
            }}/>
        </bottom.Navigator>
    )
}