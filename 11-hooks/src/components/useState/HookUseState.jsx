import styles from "./HookUseState.module.css";
import { useState } from "react";

const HookUseState = () => {
    let [nameWithState, setNameWithState] = useState("Beatriz");
    let nameWithoutState = "João";
    let [age, setAge] = useState(0);

    const updateNames = () => {
        setNameWithState("Beatriz Siqueira");
        nameWithoutState = "João Vital";

        console.log(nameWithoutState);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(age);
    };
    return (
        <div className={styles.hookUseState}>
            <h1>useState</h1>
            <div>
                <p>
                    Variável <strong>com</strong> useState: {nameWithState}
                </p>
                <p>
                    Variável <strong>sem</strong> useState: {nameWithoutState}
                </p>
                <button onClick={updateNames}> Adicionar sobrenome</button>
            </div>
            <br />
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Informe a sua idade:
                        <input
                            type='number'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </label>
                    <button className="btn btn-outline" type="submit">Enviar</button>
                </form>
                <p>Você tem {age} anos!!</p>
            </div>
        </div>
    );
};

export default HookUseState;
