import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import params from '../params'

export default props => {
    const { mined, opened, nearMines} = props // Dentro de props, eu espero receber 3 atributos (mined, opened, nearMines) //near -> perto
    // Colocando estilos condicionalmente
    const stylesField = [styles.field]
    if (opened) stylesField.push(styles.opened) // quando tiver essa propriedade, vai mudar o estilo para opened(aberto)
    if (stylesField.length === 1) stylesField.push(styles.regular)

    let color = null
    if (nearMines > 0){
        if (nearMines === 1) color = '#2A28D7'
        if (nearMines === 2) color = '#2b520f'
        if (nearMines > 2 && nearMines < 6) color = 'purple'
        if (nearMines >= 6) color = 'red'
    } 

    return(
        <View style={stylesField}>
            {!mined && opened && nearMines > 0 ? <Text style={[styles.label, { color: color}]} >{nearMines}</Text> : false}
        </View>
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

    }
})