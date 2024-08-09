import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../../screens/CategoriesScreen';
import MealsOverviewScreen from '../../screens/MealsOverviewScreen';
import MealDetail from '../../screens/MealDetail';
import DummyUseNavigation from '../../screens/DummyUseNavigation';
import { CATEGORIES } from '../../data/dummy-data';
import DrwawerNavigation from './DrwawerNavigation';
import { BottomNavigation } from './BottomNavigation';
import RecepiDetailScreen from '../../api-implementation/apiScreens/RecepiDetailScreen';
import Splash from '../../screens/Splash';

const stack = createNativeStackNavigator()
function StackNav(){
return(
    <stack.Navigator initialRouteName='Splash' screenOptions={
        {
          headerStyle:{backgroundColor:"#351401",},
          headerTintColor:"white",
          headerTitleStyle:{fontSize:20, fontWeight:"bold" },
          headerTitleAlign:"center",
          contentStyle:{backgroundColor:"#3f2f25"}
        }
      }>
        <stack.Screen name='DrawerNavigation' component={DrwawerNavigation} options={{headerShown:false}}/>
        <stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <stack.Screen name='MealsOverview' component={MealsOverviewScreen}  />
        <stack.Screen name='MealDetail' component={MealDetail}/>
        <stack.Screen name='RecepiDetailScreen' component={RecepiDetailScreen} options={{title:"Recepi Detail"}} />
        
        <stack.Screen name='DummyUseNavigation' component={DummyUseNavigation} 
        options={({route,navigation})=>{
           const title=route.params?.title
          //  const title=CATEGORIES.find((category)=>category.id===catId)?.title
          return{
            title:title

          }
        }}/>
      </stack.Navigator>
)
}
export default StackNav