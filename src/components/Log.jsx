export default function Log({log}) {
    log = [];
    return (
        <ol id="log">
            <h2>Game Log</h2>
            <ul>
                {log.map((logItem, index) => (
                    <li key={index}>{logItem}</li>
                ))}
            </ul>
        </ol>
    );
}