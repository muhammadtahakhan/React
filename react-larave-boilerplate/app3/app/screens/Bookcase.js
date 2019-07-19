import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, Image 
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class Boookcase extends Component {
  render() {
    const users = [
      {
         name: 'brynn',
         avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
      name: 'brynn',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
   },
     
     ]
    return (
      <Card title="CARD WITH DIVIDER">
      {
        users.map((u, i) => {
          return (
            <View key={i} style={styles.user}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: u.avatar }}
              />
              <Text style={styles.name}>{u.name}</Text>
            </View>
          );
        })
      }
    </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});