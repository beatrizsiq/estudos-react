import { useState } from 'react';
import './App.css';
import Cadeiras from "./assets/cadeiras.png"
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import ReactFragment from './components/ReactFragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = "Marcine";
  const otherName = useState("Tina");
  var cars = [
    { id: 1, brand: "Fiat Uno", km: 1900, color: "gray", newCar: false },
    { id: 2, brand: "Ferrari", km: 0, color: "black", newCar: true },
    { id: 3, brand: "Gol", km: 10000, color: "white", newCar: false }
  ];

  var users = [
    { id: 1, name: "Ana Maria", age: 45, occupation: "Journalist" },
    { id: 3, name: "Frederico Neves", age: 50, occupation: "Barber" },
    { id: 4, name: "Alcina Siqueira", age: 72, occupation: "Cooky" },
    { id: 2, name: "João Vital", age: 15, occupation: "Programmer" },
    { id: 6, name: "Marcos Siqueira", age: 18, occupation: "Lapidary" }
  ]

  function showMessage() {
    alert("Evento do componente Pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

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
        cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            km={car.km}
            color={car.color}
            newCar={car.newCar}
          />
        ))
      }

      {/* {React Fragments} */}
      <ReactFragment propFragment="teste" />

      {/* {PropChildren} */}
      <Container myValue="testing">
        <p>Este é o conteúdo do container</p>
      </Container>

      {/* {Função como Prop} */}
      <ExecuteFunction myFunction={showMessage} />

      {/* {state lift} */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {
        users.map((user) => (
          <UserDetails
            key={user.id}
            name={user.name}
            age={user.age}
            occupation={user.occupation}
          />
        ))
      }
    </div>
  );
}

export default App;
