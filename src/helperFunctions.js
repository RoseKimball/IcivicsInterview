//calculate winners
// create an array of arrays (lines) with all of the winning combinations
// loop through the array, destructure out values [a,b,c] and set it equal to array[i]
// so that a,b,c = 0,1,2 and a,b,c = 3,4,5 and so on
// check if there's an x or o in the starting position, squares[a], and see if it's equal to 
// other values sqaures[b] and sqaures[c]
// if it is, then we have a full line of x's or o's. return squares[a] as the winner
// otherwise return null


export function calculateWinner(squares) {
    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let i = 0; i < lines.length; i ++) {
        let [a, b, c] = lines[i];

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// const squares = [
//     null, null, null,
//     'X', 'X', 'O',
//     null, null, null
// ]

// console.log(calculateWinner(squares));
