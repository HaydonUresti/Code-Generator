// import React from 'react'
// import { CryptoJS } from 'crypto-js';
// const CryptoJS = require('crypto-js')
// import { CryptoJS } from 'crypto-js';

// const encryptString = (str) => {
//     // const CryptoJS = require('crypto-js')
//     return (CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str)));
// };

// const decryptString = (encryptedString) => {
//     // const CryptoJS = require('crypto-js')
//     return (CryptoJS.enc.Base64.parse(encryptedString).toString(CryptoJS.enc.Utf8));
// };

// // const exportItems = () => {
// //     encryptString,
// //     decryptString
// // }

// export default encryptString;


// const encryptString= (unencryptedString) => {

//     const key = '790187515473539579235723'
//     var encyptor = require('simple-encryptor')(key);
    
//     return (
//         encyptor.encrypt(unencryptedString)
//     )
// };

// export default encryptString;




// const encryptString = (unencryptedString) => {

//     const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
//     'p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I'
//     ,'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2'
//     ,'3','4','5','6','7','8','9', '!', '.', '@','#',',',';',':','/','_','-']
    
//     for (let i = 0; i < unencryptedString.length; i++) {
//         console.log(unencryptedString)
//         console.log(chars.indexOf(i))
//     }
// };

// export default encryptString;

const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I'
    ,'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2'
    ,'3','4','5','6','7','8','9', '+'];
// var scores = [10, 20, 30, 10, 40, 20];
// var scores = ['a','b','c','d','e'];
// const str = 'This is my codez';
// const str = 'y';




const encryptString = (unencryptedString) => {
    const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I'
    ,'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2'
    ,'3','4','5','6','7','8','9', '+'];
    const key = 39
    let newArray = [];
    for (let i = 0; i < unencryptedString.length; i++) {
    // console.log(str[i]);
    let currChar = chars.indexOf(unencryptedString[i])
    // console.log("Original char: ",currChar)
    // console.log("Original char: ",str[i])
    
    // console.log("len: ", chars.length)
   
    if (unencryptedString[i] == ' '){
        currChar = 62;
    }
    console.log(currChar)
    if (currChar+key > 62) {
        
        let remainder = (currChar+key)-62;
        // console.log("new char: ", remainder)
        newArray.push(chars[remainder])
    } else {let newChar = currChar+key; 
    // console.log("new char: ", newChar)
        newArray.push(chars[newChar])
    }
    
    
    }
    console.log(btoa(newArray.join("")))
    return (newArray.join(""))
    
};

const decryptString = (encryptedString) => {
    const key = 39;
    // console.log("The original Phrase: ",encryptedString )
    let decryptedArray = [];
     for (let i = 0; i < encryptedString.length; i++) {
    console.log("The curChar: ",encryptedString[i]);
    let currChar = chars.indexOf(encryptedString[i])
    console.log("Original char: ",currChar)
    
    if (currChar == 39) {
        decryptedArray.push(" ")
        continue;
    }
    if (currChar-key < 0){
        let remainder = (currChar-key)+62;
        console.log("new char: ", remainder)
        decryptedArray.push(chars[remainder])
    } else {let newChar = currChar-key; 
    
        decryptedArray.push(chars[newChar])
    }
    
    
    }
    // console.log(decryptedArray.join(""))
    return (decryptedArray.join(""));
};

// decryptString('vUV5NV5NZNP1QR')
// decryptString(encryptString(str))
// encryptString(str)

// export default { encryptString, decryptString };
export default encryptString;