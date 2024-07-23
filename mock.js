function sum(a, b) {
    return a + b;
}

const rookChessObj = {
    type: 'Rook',
    game: 'Chess',
    moveUp: () => {
        console.log('Rook moved up on the chessboard');
    },
    moveDown: () => {
        console.log('Rook moved down on the chessboard');
    },
    moveRight: () => {
        console.log('Rook moved right on the chessboard');
    },
    moveLeft: () => {
        console.log('Rook moved left on the chessboard');
    }
};

module.exports = { sum, rookChessObj };