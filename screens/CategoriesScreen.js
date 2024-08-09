import { FlatList, StyleSheet, View } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTitle from "../componenets/CategoryGridTitle"
import React, { useCallback } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function CategoriesScreen({ navigation }) {
  function rederCategoryItem(itemData) {
    function onPress() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id
      })
    }
    return (
      <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={onPress} />
    )
  }
  const keyExtractor = useCallback((item) => {
    console.log(item.id)
    return (item.id)
  }, []);
  return (
    <View>
      <FlatList data={CATEGORIES} renderItem={rederCategoryItem} keyExtractor={keyExtractor} numColumns={2} />
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default CategoriesScreen;