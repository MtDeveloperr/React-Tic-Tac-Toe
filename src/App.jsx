import { useState } from "react";

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from './winning-combinations.js';
import GameOver
 from "./components/GameOver.jsx";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){ 
  currentPlayer = 'O'
  }

  return currentPlayer;
}

function App() {
  //const [turnPlayerSymbol, setTurnPlayerSymbol] = useState('X');
  const [players,setPlayers] = useState({ 'X':'Player 1', 'O':'Player 2'});
  const [gameTurns, setGameTurns] = useState([]);
 
  const activePlayer = deriveActivePlayer(gameTurns);

  let winner = null;
  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for(let i = 0; i < gameTurns.length; i++){
       const {square, player} = gameTurns[i];
       const {row, col} = square;
       gameBoard[row][col] = player;
  }

  for(const combination of WINNING_COMBINATIONS){
    const firstSqueareSymbol =  gameBoard[combination[0].row][combination[0].column];
    const secondSqueareSymbol =  gameBoard[combination[1].row][combination[1].column];
    const thirdSqueareSymbol =  gameBoard[combination[2].row][combination[2].column];

    if(firstSqueareSymbol && firstSqueareSymbol === secondSqueareSymbol && firstSqueareSymbol === thirdSqueareSymbol){
      winner = players[firstSqueareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function changeTurn(rowIndex, colIndex) {
    // setTurnPlayerSymbol((prevTurnPlayerSymbol) => {
    //   return prevTurnPlayerSymbol === 'X' ? 'O' : 'X';
    // });
    setGameTurns((prevGameTurns) => {
      const currentPlayer = deriveActivePlayer(prevGameTurns);
      const updatedGameTurns = [{square:{
        row:rowIndex , col: colIndex
      },player: currentPlayer}, ...prevGameTurns];
       
    return updatedGameTurns;});
  }

  function playerNameChange(symbol,newName){
    setPlayers((prevPlayers) => {
      return {...prevPlayers, [symbol]: newName};
    }); 
  }

  function restart(){
    winner = null;
    setGameTurns([]); 
    //gameBoard = [...initialGameBoard];
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
        <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} onChangeName={playerNameChange}/>
        <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} onChangeName={playerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner}><button onClick={restart}>Restart The Game</button></GameOver>}
        <GameBoard turns={gameTurns} changeTurn={changeTurn} board={gameBoard}/>
        
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
