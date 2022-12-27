import React from "react";
import { View, StyleSheet } from "react-native";

export default props => {
    return(
        <View style={styles.container} >
            {<View style={styles.flagPole}/>/* Mastro da Bandeira */} 
            {<View style={styles.flag}/> /* Bandeira */} 
            {<View style={styles.base1}/> /* Base 1 da Bandeira (menor)*/} 
            {<View style={styles.base2}/> /* Base 2 da Bandeira (maior)*/} 

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
    },
    flagPole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,
    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#f22',
        marginLeft: 3,
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: 'green',
        marginLeft: 7,
        marginTop: 10,
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: 'brown',
        marginLeft: 5,
        marginTop: 12,
    }
})