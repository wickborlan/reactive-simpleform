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
  Alert,
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
              style={{width: 200, height: 200}}
            />
            <TextInput style={styles.inputText} placeholder="Username" />
            <TextInput style={styles.inputText} placeholder="Password" />
            <Button
              title="Press me"
              color="#f194ff"
              onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
