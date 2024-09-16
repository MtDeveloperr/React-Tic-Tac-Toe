import React from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({turns, changeTurn}){ 
    let gameBoard = initialGameBoard;
    console.log("GameBoard calisti");
    for(let i = 0; i < turns.length; i++){
         const {squeare, player} = turns[i];
         const {row, col} = squeare;
         gameBoard[row][col] = player;
    }
    // const [stituationGameBoard, setSituationGameBoard] = useState(initialGameBoard);
    
    //  useEffect(() => {
    //      controlGameBoard();
    //     checkBoardPlace();
    // }, [stituationGameBoard]);

    // function changeGameBoard(rowIndex,colIndex){
    //     if(stituationGameBoard[rowIndex][colIndex] != null){
    //         alert("This place is already taken");
    //         return;
    //     }
    //      setSituationGameBoard((prevSituationGameBoard) => {
    //         const updateBoard = [...prevSituationGameBoard.map((row) => [...row])];
    //         updateBoard[rowIndex][colIndex] = playerSymbol;
    //         return [...updateBoard ];000000000000000000
    //     });

    //     changeTurn(playerSymbol);
        
    // }
    // function checkBoardPlace(){
    //     for(let i = 0; i < 3; i++){
    //         for(let j = 0; j < 3; j++){
    //             if(stituationGameBoard[i][j] == null){
    //                 return false;
    //             }
    //         }
    //     }
    //     alert("Game Over");
    //     setSituationGameBoard(initialGameBoard);
    //     return true;
    // };

    // function controlGameBoard(){
        
    //     for(let i = 0; i < 3; i++){
    //         if(stituationGameBoard[i][0] == playerSymbol && stituationGameBoard[i][1] == playerSymbol && stituationGameBoard[i][2] == playerSymbol){
                
    //             return true;
    //         }
    //         if(stituationGameBoard[0][i] == playerSymbol && stituationGameBoard[1][i] == playerSymbol && stituationGameBoard[2][i] == playerSymbol){  
                

    //             return true;
    //         }
    //     }
    //     if(stituationGameBoard[0][0] == playerSymbol && stituationGameBoard[1][1] == playerSymbol && stituationGameBoard[2][2] == playerSymbol){
            

    //         return true;
    //     }
    //     if(stituationGameBoard[0][2] == playerSymbol && stituationGameBoard[1][1] == playerSymbol && stituationGameBoard[2][0] == playerSymbol){
            

    //         return true;
    //     }
    //     return false;
    // }

    return <ol id="game-board">
            {gameBoard.map((row, rowIndex) =><li key={rowIndex}>
                <ol>
                    {row.map((symbol,colIndex) => 
                    <li key={colIndex}>
                        <button onClick={()=>changeTurn(rowIndex,colIndex)}>{symbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
}