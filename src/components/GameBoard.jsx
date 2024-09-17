import React from "react";

export default function GameBoard({board, changeTurn}){ 
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
            {board.map((row, rowIndex) =><li key={rowIndex}>
                <ol>
                    {row.map((symbol,colIndex) => 
                    <li key={colIndex}>
                        <button onClick={()=>changeTurn(rowIndex,colIndex)} disabled={symbol != null}>{symbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
}