import React from "react";
import encryptString from  '../components/cypher'
import { useState } from "react";

// The home page of the website
const EncryptPage = () => {
  const [unencryptedInput, setUnencryptedInput] = useState("");
  const [code, setCode] = useState("");


  return (
        <div className="App">
          
            <header className="App-header">
              <p className="App-title">&lt;Code Generator&gt;</p>
              <a className='App-link' href='/'>Return Home</a>
              <a className='App-link' href='/decrypt'>Decrypt a Code</a>
            </header>
    
          <div className='App-body'>
            <p>Welcome to the encoder! To begin simply enter the text you want encoded into the entry box.</p>
            <p>Special characters and punctuation may not be included.</p>
            <form>
              <label>Enter the string you would like encoded:  
                <input 
                type="text"
                value={unencryptedInput}
                onChange={(text) => setUnencryptedInput(text.target.value)}
                />
              </label>
              
            </form>
           <button onClick={ () => setCode(encryptString(unencryptedInput))}>
            Encrypt your message
           </button>
           <p>{code}</p>
          </div>
          <footer className='App-footer'>
            <p className="footer-text" >2023 Code Generator - Haydon Uresti</p>
            <div>
              <a className="youTube-Icon" href="">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_icon_%282013-2017%29.png/64px-YouTube_icon_%282013-2017%29.png"/>
              </a>
              <a className='Git-icon' href="https://github.com/HaydonUresti">
                <img alt="Git Hub" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Font_Awesome_5_brands_github-square.svg/64px-Font_Awesome_5_brands_github-square.svg.png"/>
              </a>
              {/* Enter the Youtube link here when its finished */}
              
            </div>
          </footer>
        </div>
      );
}


export default EncryptPage;