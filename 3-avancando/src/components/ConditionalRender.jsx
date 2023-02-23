import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("bia");
    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se 'x' for true, SIM!</p>} 
            {!x && <p>Agora 'x' é falso!</p>} 
            <h1>If ternário</h1>
            {name === "João" ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                <div>
                    <p>O nome não foi encontrado</p>
                </div>
            )}
            <button onClick={() => setName("João")}>Altere o nome</button>
        </div>
    )
}

export default ConditionalRender