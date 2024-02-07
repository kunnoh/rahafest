import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Menu = () => {
  return (
    <View style={styles.container}>
      <Text>Menu</Text>
    </View>
  )
};

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});