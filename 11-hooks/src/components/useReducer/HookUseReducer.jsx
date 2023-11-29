import React, { useReducer } from "react";
import styles from "./HookUseReducer.module.css";

const HookUseReducer = () => {
    const [randomNumber, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });
    return (
        <div className={styles.useReducer}>
            <h1>useReducer</h1>
            <p>Numero: {randomNumber}</p>
            <button className='btn' onClick={dispatch}>
                Altere o número
            </button>
        </div>
    );
};

export default HookUseReducer;

// Parecido com o useState pois realiza o gerenciamento de valores
// Adicional: possibilidade de executar uma função no momento da alteração do valor
// state será o valor da 1º variável, neste caso o "randomNumber"
// dispatch será o nome da função que será executada
