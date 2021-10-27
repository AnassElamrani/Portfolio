import logo from './logo.svg';
// import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import Test from './components/Test'
import Home from './Layouts/Home';

function App() {
  return (
    <div className="App">
      {/* <Particles params={{particlesConfig}} /> */}
      {/* <Test />     */}
      <Home />
    </div>
  );
}

export default App;
