/* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {Button} from 'react-native';
// const Home = ({navigation}) => {
//   return (
//     <>
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </>
//   );
// };
// export default Home;

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './styles';
import {mutate} from '../../services/graphql/api';
import {gql} from 'apollo-boost';

const Home = ({navigation}) => {
  const [username, setUsername] = useState(Platform.OS === 'ios' ? '' : null);
  const [password, setPassword] = useState(Platform.OS === 'ios' ? '' : null);
  const postLogin = () => {
    let schema = gql`
      mutation generateCustomerTokenCustom($email: String!, $pass: String!) {
        generateCustomerTokenCustom(username: $email, password: $pass) {
          token
        }
      }
    `;
    let params = {email: username, pass: password};

    mutate(schema, params).then(res => {
      const {data} = res;
      const user = data.generateCustomerTokenCustom;

      console.log(user.token);
    });
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={[styles.fontColor, styles.headingTitle]}>
              CloneTonk Shop
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
            <TouchableOpacity style={styles.buttonItem} onPress={postLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
