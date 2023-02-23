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
  var cars = [
    { id: 1, brand: "Fiat Uno", km: 1900, color: "gray", newCar: false },
    { id: 2, brand: "Ferrari", km: 0, color: "black", newCar: true },
    { id: 3, brand: "Gol", km: 10000, color: "white", newCar: false }
  ];
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
      <ShowUserName name={name} secName={otherName} age={10} newCar={true} />
      {/* destructuring props */}
      <CarDetails brand="BMW" km={100} color="black" newCar={false} />
      {/* reaproveitando componentes com lista */}
      {
        cars.map((car)=>(
          <CarDetails brand= {car.brand} km={car.km} color={car.color} newCar={car.newCar} />
        ))
      }
    </div>
  );
}

export default App;
