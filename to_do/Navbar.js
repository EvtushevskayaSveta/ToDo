import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Navbar = props => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#ffd800',
  },
  text: {
    position: 'absolute',
    fontSize: 20,
    color: 'white',
    top: 15,
    alignSelf: 'center',
  },
});

export default Navbar;
