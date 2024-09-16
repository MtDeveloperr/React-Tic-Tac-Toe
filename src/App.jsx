import { useState } from "react";

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from "./components/Log";

function App() {
  const [turnPlayerSymbol, setTurnPlayerSymbol] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function changeTurn(rowIndex, colIndex) {
    setTurnPlayerSymbol((prevTurnPlayerSymbol) => {
      return prevTurnPlayerSymbol === 'X' ? 'O' : 'X';
    });
    setGameTurns((prevGameTurns) => {
      let currenPlayer = 'X'

      if(prevGameTurns.length > 0 && prevGameTurns[0].player === 'X'){ 
      currenPlayer = 'O'
      }

      const updatedGameTurns = [{squeare:{
        row:rowIndex , col: colIndex
      },player: currenPlayer}, ...prevGameTurns];
       
    return updatedGameTurns;});
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
        <Player name='Player 1' symbol='X' isActive={turnPlayerSymbol === 'X'}/>
        <Player name='Player 2' symbol='O' isActive={turnPlayerSymbol === 'O'}/>
        </ol>
        <GameBoard turns={gameTurns} changeTurn={changeTurn}/>
      </div>
      <Log />
    </main>
  );
}

export default App;
