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


const encryptString= (unencryptedString) => {

    const key = '790187515473539579235723'
    var encyptor = require('simple-encryptor')(key);
    
    return (
        encyptor.encrypt(unencryptedString)
    )
};

export default encryptString;