import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, InlineInput, Button } from './components/common';

const App = () => {
  return (
    <View style={styles.viewStyle}>
      <Header title='MocoDot' backgroundColor='#44454b' titleColor='#FFFFFF' height={150} />
      <Text style={styles.textStyle}>SIGN UP</Text>

      <ScrollView style={{ flex: 1 }}>
        <InlineInput placeholder='Business Name' />
        <InlineInput placeholder='Contact Name' />
        <InlineInput placeholder='Email' keyboardType='email-address' />
        <InlineInput placeholder='Password' secureTextEntry />
        <InlineInput placeholder='Phone' keyboardType='phone-pad' />
        <Button titleColor='#5e606b'> CONFIRM </Button>
      </ScrollView>

    </View>
  );
};

const styles = {
  textStyle: {
    paddingTop: 10,
    fontSize: 15,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#5e606b',
    position: 'relative',
    marginTop: 10
  },
  viewStyle: {
    backgroundColor: '#44454b',
    flex: 1,
  }
};
export default App;
