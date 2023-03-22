import React from "react";
import Button from "@mui/material/Button";

import "../style/GameOver.css";

const GameOver = ({ retryGame, score }) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>{" "}
      </h2>
      <Button variant="contained" color="info" onClick={retryGame}>
        Jogar novamente
      </Button>
    </div>
  );
};

export default GameOver;
