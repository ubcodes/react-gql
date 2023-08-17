import logo from './logo.svg';
import './App.css';
import { CharactersList } from './pages/CharactersList';
// import { Switch } from "react-router"
import { Routes, Route } from "react-router-dom"
import Character from './pages/Character';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route strict exact path="/"  element={<CharactersList/>}/>
      <Route strict exact path="/:id" element={<Character/>}  />
     </Routes>
    </div>
  );
}

export default App;
