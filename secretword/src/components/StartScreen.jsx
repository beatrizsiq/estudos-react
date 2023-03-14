import React from 'react'
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';

import "../style/StartScreen.css"
const StartScreen = ({ startGame }) => {
    const options = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
    ];
    return (
        <div className="start">
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar!</p>
            <button onClick={startGame}>Começar o jogo</button>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            
        </div>
    )
}

export default StartScreen