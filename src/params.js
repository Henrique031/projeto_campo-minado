import { Dimensions } from "react-native";

const params = {
    blockSize: 30, // Tamanho do bloco
    borderSize: 5, // Tamanho da borda
    fontSize: 15, // Tamanho da fonte
    headerRadio: 0.15, // Proporção superior da tela, vai oculpar 15%
    difficultLevel: 0.1, // Dificuldade do jogo
    getColumnsAmount() { //Método usado para calcular  a quantidade de colunas disponiveis, baseado no tamanho do bloco
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize) // Math.floor arrendonda para baixo 
    }, 
    getRowsAmount() { // Quantidade de linhas
        const totalHeight = Dimensions.get('window').height
        const borderHeight = totalHeight * (1 - this.headerRadio) // 0,15 - 1 = -0,85%, altura do meu tabuleiro
        return Math.floor(borderHeight / this.blockSize) // qtde de blocos no eixo vertical, qtde de linhas do meu tabuleiro
    }
}

export default params;