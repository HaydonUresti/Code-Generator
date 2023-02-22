import logo from './logo.svg';
import './App.css';

function App() {

  // returns the html conponents of the web app
  return (
    <div className="App">
      
        <header className="App-header">
          This is going to be the header
          <a className='App-link' href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>link 1</a>
          <a className='App-link' href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>link 2</a>
        </header>

      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Adding a paragraph
        
        </p>
        <button className="App-body">A button</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body className='App-body'>
        <p>This is the</p>
        <p>This is the</p>
      </body>
      <footer className='App-footer'>This is the footer</footer>
    </div>
  );
}

export default App;
