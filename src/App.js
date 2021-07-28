import logo from './logo.svg';
import './App.css';

import NavBar from './comps/navBar';
import Footer from './comps/footer';
import SectOne from './comps/sectOne';
import SectTwO from './comps/sectTwo';
import imgOne from "./img/imgOne.jpeg";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
      <img className='backgroundImage' src={imgOne}></img>
        <NavBar></NavBar>
        <SectOne></SectOne>
      </main>

    </div>
  );
}

export default App;
