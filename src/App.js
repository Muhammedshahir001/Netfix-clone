import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,orginals,ComedyMovies,Horror,Romance} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={ComedyMovies} title="Comedy" isSmall />
      <RowPost url={Horror} title="Horror" isSmall />
      <RowPost url={Romance} title="Romance" isSmall />
    </div>
  );
}

export default App;
