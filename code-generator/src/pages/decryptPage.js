import React from "react";
import { useState } from "react";
import decryptString from "../components/decipher";
import Counter from "../components/Counter";
// The page that allows the user to decrypt a string.
const DecryptPage = () => {
  
  // Creating the counter object and setting the value of the current count (currCount) 
 let counter = new Counter('decryptCounter');
 let currCount = counter.reportCount();

// subtracting 1 from the home counter in local storage so that 1 is not added to home counter when this file is called.
 let homeCounter = new Counter('homeCounter');
 homeCounter.subtractFrom('homeCounter')
 
 // State to sove temparary memory of the input and output strings.
  const [encryptedInput, setEncryptedInput] = useState("");
  const [plainText, setPlainText] = useState("");
  
    // Returning the html elements that make up the website
    return (    
          <div className="App">
                <header className="App-header">
                  <p className="App-title">&lt;Code Generator&gt;</p>
                  <a className='App-link' href='/'>Return Home</a>
                  <a className='App-link' href='/encrypt'>Encrypt a Code</a>
                </header>
        
          <div className='home-grid'>
                <div className="info">
                  <h5>You have attempted to decode {currCount} strings!</h5>
                <p>Welcome to the Decoder! To begin simply enter the text you want decoded into the entry box.</p>
                <p>Special characters and punctuation, besides "+", "/", and "=" may not be included.</p>
                </div>
                <form className="input-form">
                  <label>Enter the string you would like decoded:  
                    <input 
                    type="text"
                    value={encryptedInput}
                    onChange={(text) => setEncryptedInput(text.target.value)}
                    />
                  </label>
                </form>
               <button className="encrypt-button" onClick={ () => [setPlainText(decryptString(encryptedInput)), counter.addTo('decryptCounter')]}>
                Decrypt your message
               </button>
               <div className="output">
               <h5>Your decrypted message:</h5> 
               <p>{plainText}</p>
               </div>
          </div>
          <footer className='App-footer'>
            <p className="footer-text" >2023 Code Generator - Haydon Uresti</p>
            <div>
              <a className="youTube-Icon" href="https://youtu.be/QbtZFJWGXnw">
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


export default DecryptPage;