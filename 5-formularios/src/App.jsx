import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Formulário</h2>
      <MyForm user={{ name: "Beatriz", email: "beatrizsiqueiracosta2001@gmail.com", bio: "Desenvolvedora Web", occupation: "admin" }} />
    </div>
  );
}

export default App;
