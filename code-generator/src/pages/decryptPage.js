import React from "react";
import { useState } from "react";
import decryptString from "../components/decipher";
// The home page of the website
const DecryptPage = () => {

  const [encryptedInput, setEncryptedInput] = useState("");
  const [plainText, setPlainText] = useState("");
  
    return (
      
  
            <div className="App">
              
                <header className="App-header">
                  <p className="App-title">&lt;Code Generator&gt;</p>
                  <a className='App-link' href='/'>Return Home</a>
                  <a className='App-link' href='/encrypt'>Encrypt a Code</a>
                </header>
        
              <div className='App-body'>
                <p>Welcome to the Decoder! To begin simply enter the text you want decoded into the entry box.</p>
                <p>Special characters and punctuation, besides "+", "/", and "=" may not be included.</p>
                <form>
                  <label>Enter the string you would like decoded:  
                    <input 
                    type="text"
                    value={encryptedInput}
                    onChange={(text) => setEncryptedInput(text.target.value)}
                    />
                  </label>
                  
                </form>
               <button onClick={ () => setPlainText(decryptString(encryptedInput))}>
               {/* <button onClick={ console.log(unencryptedInput)}> */}
                Decrypt your message
               </button>
               <p>{plainText}</p>
              </div>
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