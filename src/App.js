import './App.css';
import React from 'react';
import ReactConfetti from "react-confetti";
import Nav from "./Nav"
import Game  from './Game';
import Footer from './Footer';


function App() {

  const [tenzies,setTenzies]=React.useState(false)
  
  return (
    <main>
        {tenzies && <ReactConfetti/>}
        <Nav />
        <Game />
        <Footer />
    </main>
  );
}



export default App;
