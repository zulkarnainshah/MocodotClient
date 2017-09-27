import React, { Component } from 'react';
import { View, Text, ScrollView, Picker } from 'react-native';
import axios from 'axios';
import { Header, InlineInput, Button } from './components/common';


class App extends Component {
  state = {
    serviceSectors: [],
    selectedServiceSectorID: null
  };

  componentWillMount() {
    //TODO: Call GET serviceSector API
    axios.get('http://localhost:8080/serviceSector/get').then(
      response => {
        if (response.data.length > 0) {
          this.setState({
            serviceSectors: response.data,
            selectedServiceSectorID: response.data[0].serviceSectorID
          });
        }
      }
    );
  }

  renderPicker() {
    return (
      <Picker
        selectedValue={this.state.selectedServiceSectorID}
        style={{ height: 44 }}
        itemStyle={{ height: 44, color: '#FFFFFF' }}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ selectedServiceSectorID: itemValue })}
      >
        {
          this.state.serviceSectors.map(serviceSector =>
            <Picker.Item
              label={serviceSector.name}
              value={serviceSector.serviceSectorID}
              key={serviceSector.serviceSectorID}
            />
          )
        }
      </Picker>
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
          { this.renderPicker() }
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
