import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';
import './App.css';

function App() {
  return (
    <div className="App">
        <div>
          <h1>Hi, I'm learning React</h1>
        </div>
        <FirstComponent/>
        <TemplateExpressions/>
        <Events/>
        <Challenge/>
    </div>
  );
}

export default App;
