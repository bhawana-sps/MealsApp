import { createDrawerNavigator } from '@react-navigation/drawer'
import IconButton from '../componenets/IconButton'
import User from '../drawer_navigation_screens/User';
import Home from '../drawer_navigation_screens/Home';
const drawer = createDrawerNavigator()
function DrawerNav(){
    return(
      <drawer.Navigator initialRouteName='HomeScreen' screenOptions={{
        headerStyle: { backgroundColor: '#3c0a6b' },
        headerShown:true,
        headerTintColor: 'white',
        drawerActiveBackgroundColor: '#f0e1ff',
        drawerActiveTintColor: '#3c0a6b',
        drawerStyle: { backgroundColor: '#ccc' },
        drawerContentStyle: { backgroundColor: "red" },
        sceneContainerStyle: { backgroundColor: "red" },
      }}>
        <drawer.Screen name='HomeScreen' component={Home} options={{
          drawerLabel: "Welcome",
          title: "Welcome Screen",
  
          drawerIcon: ({ color, size }) => (
            <IconButton icon={require('../assets/rating_star.png')} color={"yellow"} onPress={null} />
          ),
          drawerActiveTintColor: "red",
          drawerActiveBackgroundColor: "black",
          drawerHideStatusBarOnOpen: true,
          drawerInactiveTintColor: "blue",
          drawerInactiveBackgroundColor: "grey"
        }} />
        <drawer.Screen name='UserScreen' component={User} />
  
      </drawer.Navigator>
    )
  }
  export default DrawerNav