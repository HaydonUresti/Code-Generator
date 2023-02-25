import React from "react";
// import encryptString from  '../components/cypher'
// import { exportItems } from "../components/cypher";
import { useState } from "react";
// import encryptString from "../components/cypher";
import encryptString from "../components/cypher";
// The home page of the website
const EncryptPage = () => {

  const [code, setCode] = useState("");
  // let encodedString = exportItems.encryptString(code)
  // let encodedString = encryptString(code)
  let outputCode = ''

  return (
        <div className="App">
          
            <header className="App-header">
              <p className="App-title">&lt;Code Generator&gt;</p>
              <a className='App-link' href='/'>Return Home</a>
              <a className='App-link' href='/decrypt'>Decrypt a Code</a>
            </header>
    
          <body className='App-body'>
            <p>Welcome to the encoder! To begin simply enter the text you want encoded into the entry box.</p>
            <p>This is the</p>
            <form>
              <label>Enter the string you would like encoded:  
                <input 
                type="text"
                value={code}
                onChange={(text) => setCode(text.target.value)}
                />
              </label>
              <input type="submit" />
            </form>
           <button onClick={encryptString(code)}>
            Encrypt your message
           </button>
           <p>{outputCode}</p>
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


export default EncryptPage;