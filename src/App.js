import './App.css'
import React from 'react';
import GamesContainer from './containers/GameContainer';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return(
    <>
    <Header/>
    <div className='App'>
      <GamesContainer/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
