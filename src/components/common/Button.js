import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }, props) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={[textStyle, { color: props.titleColor }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 50,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15
  }
};

export { Button };
