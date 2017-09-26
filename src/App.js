import React, { Component } from 'react';
import { View, Text, ScrollView, Picker } from 'react-native';
import axios from 'axios';
import { Header, InlineInput, Button } from './components/common';


class App extends Component {
  state = { serviceSectors: [] };

  componentWillMount() {
    //TODO: Call GET serviceSector API
    axios.get('http://localhost:8080/serviceSector/get').then(
      response => {
        this.setState({ serviceSector: response.data });
      }
    );
  }

  render() {
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
          <Text style={styles.textStyle}>Pick a service sector</Text>
          <Picker
            selectedValue='Health'
            style={{ height: 44 }}
            itemStyle={{ height: 44, color: '#FFFFFF' }}
          >
            <Picker.Item label="Health" value="java" />
            <Picker.Item label="Transport" value="js" />
          </Picker>
          <Button titleColor='#5e606b'> CONFIRM </Button>
        </ScrollView>

      </View>
      );
    }
}

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
