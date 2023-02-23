import React from "react";

// The home page of the website
const DecryptPage = () => {
    return (
        <div className="App">
          
            <header className="App-header">
              <p className="App-title">&lt;Code Generator&gt;</p>
              <a className='App-link' href='/'>Return Home</a>
              <a className='App-link' href='/encrypt'>Decrypt a Code</a>
            </header>
    
          <body className='App-body'>
            <p>This is the Decrypt page!</p>
            <p>This is the</p>
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


export default DecryptPage;