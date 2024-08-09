/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './navigationPract/DrawerNav';
import BottomNav from './navigationPract/BottomNav';
import MaterialBottomNav from './navigationPract/MaterialBottomNav';
import TopTabNav from './navigationPract/TopTabNav';
import StackNav from './navigationPract/mealAppUsed/StackNav';
import { Provider } from 'react-redux';
import { store } from './store/redux_toolkit/store';
import FavoritesContextProvider from './store/context/favorites-context';
import { BottomNavigation } from './navigationPract/mealAppUsed/BottomNavigation';
// import store from './store/redux/store';


function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* translucent={true} animated={true}barStyle="light-content"showHideTransition="fade"/> */}
      <SafeAreaView style={styles.SafeAreaViewContainer}>
        <View style={styles.container}>
          <FavoritesContextProvider>
        {/* <Provider store={store}> */}
          <NavigationContainer>
            {/* <BottomNavigation/> */}
           <StackNav/>
           
           {/* <DrawerNav/>
          <BottomNav/> */}
          {/* <MaterialBottomNav/> */}
          {/* <TopTabNav/> */}
          </NavigationContainer>
          {/* </Provider> */}
          </FavoritesContextProvider>
        </View>
      </SafeAreaView>
    </>

  )
}

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#24180f",
  },
  container: {
    flex: 1,
    // marginTop: 20,
  }
});

export default App;
