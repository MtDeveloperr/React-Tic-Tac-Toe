import { useState } from "react";


export default function Player({ initialName, symbol, isActive,onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing ] = useState(true);
    function triggerEdit() {
        setIsEditing((editing)=>!editing); 
        onChangeName(symbol,playerName);
    }
    function savePlayer(event) {
        setPlayerName(event.target.value); 
    }
    
    return (
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {!isEditing ? <input type="text" onChange={savePlayer} value={playerName} /> : <span className="player-name">{playerName}</span>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={triggerEdit}>{!isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
} 