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
            return { ...field }
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
            const validRow = r >= 0 && r < board.length // Saber se tem uma linha valida
            const validColumn = c >= 0 && c < board[0].length // A linha não pode passar o tamanho do board
            if (different && validRow && validColumn) {
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}

// Saber si a vizinhança é segura
const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined // Teste para verificar se tem mina por perto
    return getNeighbors(board, row, column).reduce(safes, true)
}

// Funcão responsavel por abrir quando o usuário der um click/apertar na tela
const openField = (board, row, column) => {
    const field = board[row][column]
    if (!field.opened) {
        field.opened = true
        if (field.mined) {
            field.exploded = true
        } else if (safeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column).forEach(n => openField(board, n.row, n.column))
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length 
        }
    }
}

const fields = board => [].concat(...board)
const hadExplosion = board => fields(board).filter(field => field.exploded).length > 0
//campo pendente (usuario não marcou bandeira)
const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.opened) 
const wonGame = board => fields(board).filter(pendding).length === 0
const showMines = board => fields(board).filter(field => field.mined).forEach(field => field.opened = true)

const invertFlag = (board, row, column) => {
    const field = board[row][column]
    field.flagged = !field.flagged
}

export { 
    createMinesBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag
 }