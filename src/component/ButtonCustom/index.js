import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import ButtonCustomStyle from './style';

const ButtonCustom = ({type}) => {
  return (
    <>
      <TouchableOpacity style={ButtonCustomStyle.buttonMain}>
        <Text>{type}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonCustom;
