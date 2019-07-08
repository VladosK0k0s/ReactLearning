import React from 'react';
import './App.css';
import MainBar from './components/Bars/MainBar.jsx'
import MainContent from './components/Content/Content.jsx'
import Header from './components/Header/Header.jsx'


function App() {
  return ( 
    <div className='App-wrapper'>
      <Header/>
      <MainBar/>
      <div className='App-wrapper-MainContent'>
        <MainContent/>
      </div>
    </div>
  );
}
export default App;
