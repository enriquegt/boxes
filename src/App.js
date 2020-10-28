import logo from './logo.svg';
import './App.css';

import Profime from './components/profime';
import Learn from './components/learn';
import Interests from './components/interests';
import Expectations from './components/expectations';
import './components/styles.css'

function App() {
  return (
    <div className="App">
      <div className="contenedor">
        <Profime />
        <Interests />
        <Learn />
        <Expectations />
      </div>
    </div>
  );
}

export default App;
