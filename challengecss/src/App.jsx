import './App.css';
import Cars from './components/Cars';

function App() {
  const cars = [
    {
      marca: "Fiat Uno",
      valor: 20.0000,
      cor: "8d99ae",
      km: 43,
      novo: "Não"
    },
    {
      marca: "Strada",
      valor: 54.0000,
      cor: "354f52",
      km: 0,
      novo: "Sim"
    },
    {
      marca: "Jeep Renegade",
      valor: 108.0000,
      cor: "1d3557",
      km: 0,
      novo: "Sim"
    },
    {
      marca: "GOL",
      valor: 34.0000,
      cor: "9b2226",
      km: 76,
      novo: "Não"
    }
  ]

  return (
    <div className="App">
      <h1>Automóveis à Venda</h1>
      <div className='listagemAutomoveisDisponiveis'>
        {
          cars.map((car) => (
            <Cars
              marca={car.marca}
              valor={car.valor}
              cor={car.cor}
              km={car.km}
              novo={car.novo}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
