import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from './MealItem';

function MealsList({items}) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
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
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});