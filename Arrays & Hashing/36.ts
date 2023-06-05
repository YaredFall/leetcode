function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        const rowSet = new Set<string>();
        const colSet = new Set<string>();
        const cellSet = new Set<string>();
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] !== ".") {
                if (rowSet.has(board[i][j])) {
                    return false;
                }
                rowSet.add(board[i][j]);
            }
            
            if (board[j][i] !== ".") {
                if (colSet.has(board[j][i])) {
                    return false;
                }
                colSet.add(board[j][i]);
            }
            
            const cellRowId = ~~(j / 3) + 3 * ~~(i / 3);
            const cellColId = j % 3 + 3 * (i % 3);
            if (board[cellRowId][cellColId] !== ".") {
                if (cellSet.has(board[cellRowId][cellColId])) {
                    return false;
                }
                cellSet.add(board[cellRowId][cellColId]);
            }
        }
        // console.log(`col ${i}`, rowSet)
        // console.log(`row ${i}`, colSet)
        // console.log(`cell ${i}`, cellSet)
    }

    return true;
};

export { isValidSudoku }