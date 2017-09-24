import { TextInput } from 'react-native';
import React from 'react';

const InlineInput = (props) => {
  const { placeholder, secureTextEntry, keyboardType } = props;

  return (
    <TextInput
      placeholder={placeholder}
      style={styles.inputStyle}
      underlineColorAndroid="transparent"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
};

const styles = {
  inputStyle: {
    color: '#FFFFFF',
    alignSelf: 'stretch',
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#5e606b',
    paddingBottom: 10,
    paddingTop: 10
  }
};

export { InlineInput };
