// import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import EncryptPage from './pages/encryptPage';
import DecryptPage from './pages/decryptPage';


function App() {

  // returns the html conponents of the web app
  return (
    <div>
    {/* <HomePage />
    <EncryptPage />
    <DecryptPage /> */}
    <Router>
      <Routes>
        <Route exact path="/" element={HomePage}/>
        <Route exact path="/" element={EncryptPage}/>
        <Route exact path="/" element={DecryptPage}/>
      </Routes>
    </Router>
{/*     <Route exact path="/" component={HomePage} />
        <Route path="/encryptPage" component={EncryptPage} />
        <Route path="/decryptPage" component={DecryptPage} /> */}
    </div>
  );

  // return (
  //   <div className="App">
      
  //       <header className="App-header">
  //         <p className="App-title">&lt;Code Generator&gt;</p>
  //         <a className='App-link' href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>Generate a Code</a>
  //         <a className='App-link' href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>Decrypt a Code</a>
  //       </header>

      
  //     {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <p>
  //         Adding a paragraph
        
  //       </p>
  //       <button className="App-body">A button</button>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header> */}
  //     <body className='App-body'>
  //       <p>This is the</p>
  //       <p>This is the</p>
  //     </body>
  //     <footer className='App-footer'>
  //       <p>2023 Code Generator - Haydon Uresti</p>
  //       <div>
  //         {/* A git hub link can go here */}
  //       </div>
  //     </footer>
  //   </div>
  // );
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <Router>
//        <Route path="/" component={HomePage} />
//      </Router>
//     );
//   }
// }

// export default App;