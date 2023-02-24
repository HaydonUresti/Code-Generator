import React from 'react'

const CryptoJS = require('crypto-js')


const encryptString = (str) => {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
};

const decryptString = (encryptedString) => {
    return CryptoJS.enc.Base64.parse(encryptedString).toString(CryptoJS.enc.Utf8);
};

export default {encryptString, decryptString};