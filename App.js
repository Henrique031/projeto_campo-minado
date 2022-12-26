import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import params from './src/params';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} >Iniciando o mines</Text>
        <Text style={styles.instructions} >Tamanho da Grade: {params.getRowsAmount()}x{params.getColumnsAmount}</Text> {/* Linhas x Colunas */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20, 
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    
  }
});
