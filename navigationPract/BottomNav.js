import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../drawer_navigation_screens/Home"
import User from "../drawer_navigation_screens/User"
import IconButton from "../componenets/IconButton"

const bottom = createBottomTabNavigator()
function BottomNav() {
    return (
        <bottom.Navigator screenOptions={{
            headerShown:true,
            headerStyle: { backgroundColor: '#3c0a6b' },
            headerTintColor: 'white',
            tabBarActiveTintColor: '#3c0a6b'
        }}>
            <bottom.Screen name='HomeScreen' component={Home} 
            options={{
               
                title: "Welcome Screen",
        
                tabBarIcon: ({ color, size }) => (
                  <IconButton icon={require('../assets/rating_star.png')} color={"yellow"} onPress={null} />
                ),
               
              }}/>
            <bottom.Screen name='UserScreen' component={User} />
        </bottom.Navigator>
    )
}
export default BottomNav