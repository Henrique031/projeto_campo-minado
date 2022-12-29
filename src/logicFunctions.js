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
    const columns = board[0].length //Qtde de Colunas
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

// sempre que for mexer no estado de um componente, não mexer diretamente na referencia do obj, mais sim gerando novos obj do mesmo.
const cloneBoard = board => { // Clone de todos os dados/objeots do tabuleiro
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        })
    })
}

const getNeighbors = (board, row, column) => {// Pegar vizinhos
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]
    rows.forEach(r => {
        columns.forEach(c => {
            const different = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board.length
            if (different && validRow && validColumn) {
                neighbors.push([r] [c])
            }
        })
    })
    return neighbors
}

// Saber si a vizinhança é segura
const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined
}

export { createMinesBoard }