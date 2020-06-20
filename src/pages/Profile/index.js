/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Button} from 'react-native';
const Profile = ({navigation}) => {
  return (
    <>
      <Text>Ini Profile</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </>
  );
};
export default Profile;
