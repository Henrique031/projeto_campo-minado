import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'

import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

export default props => {
    const { mined, opened, nearMines, exploded, flagged} = props // Dentro de props, eu espero receber 3 atributos (mined, opened, nearMines) //near -> perto // exploded pra sabaer se foi explodida
    // Colocando estilos condicionalmente
    const stylesField = [styles.field]
    if (opened) stylesField.push(styles.opened) // quando tiver essa propriedade, vai mudar o estilo para opened
    if (exploded) stylesField.push(styles.exploded)
    if (flagged) stylesField.push(styles.flagged)
    if (!opened && !exploded) stylesField.push(styles.regular) // push -> add no final do array // só será add, quando passar por todos os outros testes

    let color = null
    if (nearMines > 0){
        if (nearMines === 1) color = '#2A28D7'
        if (nearMines === 2) color = '#2b520f'
        if (nearMines > 2 && nearMines < 6) color = 'purple'
        if (nearMines >= 6) color = 'red'
    } 

    return(
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onSelect} >

        <View style={stylesField}>
            {!mined && opened && nearMines > 0 ? <Text style={[styles.label, { color: color}]} >{nearMines}</Text> : false}
            {mined && opened ? <Mine /> : false}
            {flagged && !opened ? <Flag /> : false}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    field: { //campo
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',

    }
})