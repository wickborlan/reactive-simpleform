/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import {View, SafeAreaView, ScrollView} from 'react-native';

// import styles from '../src/asset/style';
// import FirstLast from './component/FirstLast';
// import ButtonCustom from './component/ButtonCustom';

// const App = () => {
//   return (
//     <View style={[styles.container, styles.fontColor]}>
//       <SafeAreaView>
//         <ScrollView>
//           <FirstLast />
//           <ButtonCustom type="Registery" />
//         </ScrollView>
//       </SafeAreaView>
//     </View>
//   );
// };

// export default App;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{title: 'Welcome'}}
    //     />
    //     <Stack.Screen name="Profile" component={Profile} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Landing" component={Landing} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
