// Função 1: Criar tabuleiro
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => { // Percorrer no indice linhas
        return Array(columns).fill(0).map((_, column) => {  // Percorrer no indice colunas
            return{
                //Matriz de arrays
                //Atributos
                row: row,
                column: column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0,
            }   
        })

    })
}

// Função 2: Espalhar minas no tabuleiro
const spreadMines = (board, minesAmount) => {
    const rows = board.length //Qtde de linhas
    const columns = board[0].length //Qtde de linhas
    let minesPlanted = 0
    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10 ) //rowSel(linha selecionada) // Multiplicando o random() por algum valor(rows), o valor do random fica entre o valor(rows) ex: random() * 10, out => 1.3454,5.352345,2.355,6.32524,3.6767,6.3252435,8.23454325,5.23453245,9.11673 
        const columnSel = parseInt(Math.random() * columns, 10)

        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}

// Função 3: Pegar função 1 e 2 pra criar um tabuleiro que tenha as minas plantadas
const createMinesBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount);
    return board;
}

export { createMinesBoard }