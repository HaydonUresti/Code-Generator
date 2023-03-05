import React from "react";

import Counter from "../components/Counter";

// Creating the counter object and setting the value of the current count (currCount) 
let count = new Counter('homeCounter')
count.addTo('homeCounter') 
// The + 1 is to account for the initial visit to the website
let currCount = count.reportCount() + 1 

// Changing the visitPhrase based on the number of times the user has visited the page 
var visitPhrase = 'You have started this app ' + currCount + ' times now!';
if (currCount===1){
  var visitPhrase = 'You have started the this app 1 time!';
} 


// The home page of the website
const HomePage = () => {

  // Returning the html elements that make up the website
    return (
        <div className="App">
          
            <header className="App-header">
              <div className="App-title">
              <p className="App-title">&lt;Code-Generator&gt;</p>
              <a className='App-link' href='/encrypt'>Encrypt a String</a>
              <a className='App-link' href='/decrypt'>Decrypt a Code</a>
              </div>
            </header>
    
          <div className='home-grid'>
            <div class='about-position'>
              <h5>{visitPhrase}</h5>
            <h2>About Code Generator</h2> 
            <p>Code generator is a web app that allows you to enter a string and have it encoded!
              After your string is encoded, you can decode it as well! This allows you to create secret
              messages for you and your friends!</p>
              </div>
              <div className="encode-postion">
            <h3>To encode a message:</h3>
            <p>In order to encode a string, go to the 'Encrypt a String' page. Once there, enter your 
              string into the text input box. After that simply cick the 'Encrypt your message' button.
              Your encrypted message will appear bellow.
            </p>
            </div>
            <div className="decode-postion">
            <h3>To decode a message:</h3>
            <p>
              To decode a message, go to the 'Decrypt a Message' page. Next, enter a string into the text
              input box. Finally, click the 'Decrypt your message' button and your decrypted messgae will 
              appear bellow.
              Note that the decoder is designed to decode messages encoded in Code-Generator, and will likely
              note help to decode messages encoded elsewhere.
            </p>
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


export default HomePage;
// Maybe change the theme based on the time of day?