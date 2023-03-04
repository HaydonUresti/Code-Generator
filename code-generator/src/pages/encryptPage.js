import React from "react";
import encryptString from  '../components/cypher'
import { useState } from "react";
import Counter from "../components/Counter";

// The page that allows the user to encrypt a string.
const EncryptPage = () => {

  // Creating the counter object and setting the value of the current count (currCount) 
let encryptCounter = new Counter('encodeCounter');
let currCount = encryptCounter.reportCount();

// subtracting 1 from the home counter in local storage so that 1 is not added to home counter when this file is called.
let homeCounter = new Counter('homeCounter');
homeCounter.subtractFrom('homeCounter')

// State to sove temparary memory of the input and output strings.
  const [unencryptedInput, setUnencryptedInput] = useState("");
  const [code, setCode] = useState("");


  // Returning the html elements that make up the website
  return (
        <div className="App">
          
            <header className="App-header">
              <p className="App-title">&lt;Code Generator&gt;</p>
              <a className='App-link' href='/'>Return Home</a>
              <a className='App-link' href='/decrypt'>Decrypt a Code</a>
            </header>
    
          <div className='home-grid'>
            <div className="info">
            <h5>You have encoded {currCount} strings!</h5>
            <p>Welcome to the encoder! To begin simply enter the text you want encoded into the entry box.</p>
            <p>Special characters and punctuation may not be included.</p>
            </div>
            <form className="input-form">
              <label>Enter the string you would like encoded:  
                <input 
                type="text"
                value={unencryptedInput}
                onChange={(text) => setUnencryptedInput(text.target.value)}
                />
              </label>
              
            </form>
           <button className='encrypt-button' onClick={ () => [setCode(encryptString(unencryptedInput)), encryptCounter.addTo('encodeCounter')]}>
            Encrypt your message
           </button>
           <div className="output">
            <h5>Your encoded message:</h5>
           <p>{code}</p>
           </div>
          </div>
          <footer className='App-footer'>
            <p className="footer-text" >2023 Code Generator - Haydon Uresti</p>
            <div>
              <a className="youTube-Icon" href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
              <img alt="Youtube" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_icon_%282013-2017%29.png/64px-YouTube_icon_%282013-2017%29.png"/>
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