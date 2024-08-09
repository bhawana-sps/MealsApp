import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Home from "../drawer_navigation_screens/Home"
import User from "../drawer_navigation_screens/User"

const bottomTab=createMaterialBottomTabNavigator()
function MaterialBottomNav(){
    return(
     <bottomTab.Navigator>
        <bottomTab.Screen name="Homescreen" component={Home}/>
        <bottomTab.Screen name="User" component={User}/>
     </bottomTab.Navigator>
    )
}
export default MaterialBottomNav