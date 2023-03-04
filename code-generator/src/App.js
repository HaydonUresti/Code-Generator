
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import EncryptPage from './pages/encryptPage';
import DecryptPage from './pages/decryptPage';


function App() {

  // returns the html components of the web app
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={HomePage}/>
        <Route exact path="/" element={EncryptPage}/>
        <Route exact path="/" element={DecryptPage}/>
      </Routes>
    </Router>
    </div>
  );
  }

export default App;
