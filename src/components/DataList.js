import React, { Component } from 'react';
import { Text, ListView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import * as actions from '../actions';

class DataList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libs);
  }

  rowClicked(itemID) {
    debugger;
  }

renderRow(singleItem) {
  return (
    <TouchableWithoutFeedback onPress={() => this.rowClicked(singleItem.id)} >
      <Card>
        <CardSection>
          <Text>
            {singleItem.title}
          </Text>
        </CardSection>
      </Card>
    </TouchableWithoutFeedback>
  );
}

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const propItems = state.items;
  return { libs: propItems };
};
export default connect(mapStateToProps, actions)(DataList);
