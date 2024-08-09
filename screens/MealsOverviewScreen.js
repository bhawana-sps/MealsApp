import { FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealItem from "../componenets/MealItem"
import { useLayoutEffect } from "react"

function MealsOverviewScreen({route,navigation}) {
    const id= route.params.categoryId

    const mealsList=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(id)>=0
    })
    useLayoutEffect(()=>{
        const title= CATEGORIES.find((category)=>category.id===id).title
        navigation.setOptions({
            title:title
        })
      
    },[navigation,id])
   
    function renderItem(itemData){
        const item=itemData.item
        const mealItemProps={
            title:item.title,
             imageUrl:item.imageUrl,
             rating:item.rating,
             type:item.type,
             cusine:item.cusine,
             cost:item.cost,
             discount:item.discount,
             isVeg:item.isVegetarian,
             duration:item.duration,
             isNear:item.isNear,
             isAward:item.isAward,
             isGultanFree:item.isGlutenFree,
             isVegan:item.isVegan,
             mealId:item.id
        }
        return(
            <MealItem {...mealItemProps}/>
        )
    }
    return (
        <View style={style.container}>
           <FlatList data={mealsList} keyExtractor={(mealItem)=> mealItem.id} renderItem={renderItem}/>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:12
    }
})
export default MealsOverviewScreen