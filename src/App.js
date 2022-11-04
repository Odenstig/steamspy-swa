import './App.css'
import React from 'react';
import GamesContainer from './containers/GameContainer';
import Header from './components/Header'

function App() {
  return(
    <>
    <Header/>
    <div className='App'>
      <GamesContainer/>
    </div>
    </>
  );
}

export default App;
