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
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#808080',
    paddingBottom: 20,
  },
  text: {
    fontSize: 20,
    color: 'while',
  },
});
export default Navbar;
