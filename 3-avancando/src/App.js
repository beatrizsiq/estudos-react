import { useState } from 'react';
import './App.css';
import Cadeiras from "./assets/cadeiras.png"
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
function App() {
  const name = "Marcine";
  const otherName = useState("Tina");

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img src="/logoFesta.jpg" alt="logoFesta" />
      </div>
      <div>
        <img src={Cadeiras} alt="" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={name} secName={otherName} age={10}  newCar={true}/>
      {/* destructuring props */}
      <CarDetails brand="BMW" km={100} color="black"  newCar={false}/>
      {/* reaproveitando componentes */}
      <CarDetails brand="FiatUno" km={200} color="gray " newCar={true}/>
    </div>
  );
}

export default App;
