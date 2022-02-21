import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,  //flex se suma 1+2+3=6 y son las partes de la unidad que se toma, en fracción
        backgroundColor: '#28C4D9',
    },
    caja1: {
        flex: 1,
        borderWidth: 5,
        borderColor: 'white',
        fontSize: 30,
    },
    caja2: {
        flex: 2,
        borderWidth: 5,
        borderColor: 'white',
        fontSize: 30,
    },
    caja3: {
        flex: 3,
        borderWidth: 5,
        borderColor: 'white',
        fontSize: 30,
    },
});
