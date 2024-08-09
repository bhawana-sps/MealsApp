import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Home from "../drawer_navigation_screens/Home"
import User from "../drawer_navigation_screens/User"


const topTab=createMaterialTopTabNavigator()
function TopTabNav(){
    return(
     <topTab.Navigator>
        <topTab.Screen name="HomeScreen" component={Home}/>
        <topTab.Screen name="UserScreen" component={User}/>
     </topTab.Navigator>
    )
}
export default TopTabNav