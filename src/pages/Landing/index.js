/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';

import styles from './styles';

const Landing = ({navigation}) => {
  return (
    <>
      <View style={styles.wrapBox}>
        <Text style={styles.metaTitle}>CloneTonk Shop</Text>
        <Image
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
          style={styles.logo}
        />
        <Text style={styles.subTitle}>Memenuhi segala kebutuhan Anda</Text>
        <TouchableOpacity
          style={styles.buttonItem}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Landing;
