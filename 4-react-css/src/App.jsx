import ComponentStyle from './components/ComponentStyle';
import './App.css';
import { useState } from 'react';

function App() {
  var num = 15;
  var [name, setName] = useState("Beatriz");

  function handleChangeName(newName) {
    // setName(newName);
    console.log(newName);
  }
  return (
    <div className="App">
      <h1>React com CSS </h1>

      {/* {CSS de componente} */}
      <ComponentStyle />

      {/* {CSS inline} */}
      <p>Parágrafo do App.Js</p>
      <p style={
        {
          color: "blue",
          padding: "25px",
          borderTop: "2px solid red"
        }
      }>
        Elemento estilizado de forma inline
      </p>

      {/* {CSS inline dinamico} */}
      <h2
        style={
          num < 10 ? ({ color: "yellow" }) : ({ color: "purple" })
        }
      >
        CSS dinâmico
      </h2>

      <input type="text" onChange={() => handleChangeName(this.value)} />

      <h2
        style={
          name === "Beatriz" ? ({ color: "pink", backgroundColor: "black" }) : ({ color: "green", backgroundColor: "blue" })
        }
      >
        O nome é "{name}"
      </h2>
    </div>
  );
}

export default App;
