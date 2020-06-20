/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
} from 'react-native';

import styles from './styles';

const FirstLast = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text style={[styles.fontColor, styles.headingTitle]}>
              Lambe Turah App
            </Text>
            <Image
              source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
              style={styles.logo}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Username"
              onChangeText={text => setUsername(text)}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.inputText}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
            />
            {/* <View style={styles.buttonMain}>
              <Button title="Logyin" />
            </View> */}
          </View>
        </ScrollView>
        <Text>{username}</Text>
      </SafeAreaView>
    </View>
  );
};

export default FirstLast;
