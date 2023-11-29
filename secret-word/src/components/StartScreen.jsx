import React from 'react'
import Button from '@mui/material/Button';

import "../style/StartScreen.css"
const StartScreen = ({ startGame }) => {
    return (
        <div className="start">
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar!</p>
            <Button variant="contained" color='success' onClick={startGame}>Começar</Button>
        </div>
    )
}

export default StartScreen