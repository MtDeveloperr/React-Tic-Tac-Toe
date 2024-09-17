export default function GameOver({winner,children}) {
    return (
        <div id="game-over">
            <h1>Game Over</h1>
            {winner ? <h2>{winner} wins!</h2> : <h2>It's a draw!</h2>}
            <p>
                {children}  
            </p>
        </div>
    );
}