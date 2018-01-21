import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomEmoji from 'react-native-customemoji';

const emojiArray = {
  ":reactnative:":{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'},
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          <Text style={styles.largeText}>Welcome to :reactnative:!</Text>
          <Text style={styles.mediumText}>Build native :mobile: apps using :javascript: and :react:.</Text>
        </View>
        <View style={styles.container}>
          <CustomEmoji emojis={emojiArray}>
            <Text style={styles.largeText}>Welcome to :reactnative:!</Text>
            <Text style={styles.mediumText}>Build native :mobile: apps using :javascript: and :react:.</Text>
          </CustomEmoji>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText: {
    fontSize: 20
  },
  mediumText: {
    fontSize: 12
  }
});
