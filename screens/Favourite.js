import { Text, View,StyleSheet } from "react-native"
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import MealsList from "../componenets/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";


function Favourite() {
    // const favoriteMealIds  = useSelector(state =>state?.favourite.ids)
    // const favoriteMealIds  = useSelector(state =>state?.favoriteMeals.ids)
    const favoriteMealIds = useContext(FavoritesContext);
    console.log(favoriteMealIds)
    const favoriteMeals = MEALS.filter((meal) =>
      favoriteMealIds.ids.includes(meal.id)
        // favoriteMealIds.includes(meal.id)
      );

        if (favoriteMeals.length === 0) {
            return (
              <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
              </View>
            );
          }
        
          return <MealsList items={favoriteMeals} />;
}
const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
  });
export default Favourite