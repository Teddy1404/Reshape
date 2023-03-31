import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Nabvbar/Navbar';
import About from './components/Aboutus/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
