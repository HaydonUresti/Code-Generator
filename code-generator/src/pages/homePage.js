import React from "react";

// The home page of the website
const HomePage = () => {
    return (
        <div className="App">
          
            <header className="App-header">
              <p className="App-title">&lt;Code Generator&gt;</p>
              <a className='App-link' href='/encrypt'>Generate a Code</a>
              <a className='App-link' href='/decrypt'>Decrypt a Code</a>
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
            <p>This is the home page</p>
            
          </body>
          <footer className='App-footer'>
            <p>2023 Code Generator - Haydon Uresti</p>
            <div>
              {/* A git hub link can go here */}
            </div>
          </footer>
        </div>
      );
}


export default HomePage;