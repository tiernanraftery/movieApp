import logo from './logo.svg';
import Header from './components/Header';
import Content from './components/content';
import Footer from './components/Footer';
import './App.css';
 {/*import the files from component file */}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Prints hello world to the screen */}
        <h1>Hello World</h1>
        {/*Prints time to the screen */}
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </header>
    </div>
  );
}

export default App;
