/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
} from 'react-native';

import styles from './asset/style';

const App = () => {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View style={[styles.container, styles.fontColor]}>
            <Text style={[styles.fontColor, styles.headingTitle]}>
              Lambe Turah App
            </Text>
            <Image
              source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
              style={styles.logo}
            />
            <TextInput style={styles.inputText} placeholder="Username" />
            <TextInput
              secureTextEntry={true}
              style={styles.inputText}
              placeholder="Password"
            />
            <View style={styles.buttonMain}>
              <Button title="Login" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
