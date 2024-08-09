import { useRoute } from "@react-navigation/native"
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import LinearGradient from "react-native-linear-gradient"
import DashedLine from "react-native-dashed-line"
import MealImageItem from "../componenets/MealImageItem"
import MealInfo from "../componenets/MealInfo"
import { useContext, useEffect, useLayoutEffect, useState } from "react"
import IconButton from "../componenets/IconButton"
import { useDispatch, useSelector } from "react-redux"
import { clearData, setData } from "../store/redux/action"
import { addFavorite, removeFavorite } from "../store/redux_toolkit/favorites"

import { FavoritesContext } from '../store/context/favorites-context';

function MealDetail({ navigation }) {
  const route = useRoute()
  const mealId = route.params?.mealId
  const mealObject = MEALS.find((meals) => meals.id === mealId)
  const [tintColor, setTintColor] = useState('white');
  // const dispatch = useDispatch();
 
  // const favList = useSelector(state => state?.favourite.ids)
  // const favList = useSelector((state) => state.favoriteMeals.ids);
  const favList = useContext(FavoritesContext)
  const mealIsFavorite = favList.ids.includes(mealId);
  useEffect(()=>{
    // if (favList.includes(mealId)) {
    if(mealIsFavorite){
      setTintColor('yellow')
    }
    else {
      setTintColor('white')
    }
  },[favList,mealId])
  
  function pressHandler() {
    console.log("button tapped")

    tintColor === "yellow" ? setTintColor('white') : setTintColor('yellow')
    // if (favList.includes(mealId)){
      if(mealIsFavorite){
      // dispatch(clearData(mealId))
      // dispatch(removeFavorite({ id: mealId }));
      favList.removeFavorite(mealId)
    }
    else{
      favList.addFavorite(mealId)
    // dispatch(addFavorite({ id: mealId }))
      // dispatch(setData(mealId))
    // dispatch(recentlyAdded(mealId))
    }
  }
  // useLayoutEffect(()=>{
  //   navigation.setOptions({
  //     headerRight:()=>{
  //       return <Button title="Tap Me!" onPress={pressHandler}/>
  //     }
  //   })
  // },[navigation,pressHandler])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={require('../assets/rating_star.png')} color={tintColor} onPress={pressHandler} />
      }
    })
  }, [navigation, pressHandler, tintColor])
  return (
    <View>
      <ScrollView>
        <MealImageItem mealObject={mealObject} />

        <View style={{ marginHorizontal: 10 }}>

          <MealInfo mealObject={mealObject} />
        </View>

      </ScrollView >
    </View >
  )
}

export default MealDetail