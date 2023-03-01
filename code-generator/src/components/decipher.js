// A function that decrypts the encryption of encryptString
// Parameters: encryptedString- The string that the function will attempt to decrypt
// Returns: decryptedArray- (becomes a string) The decrypted string
const decryptString = (encryptedString) => {
    // A list of chars that the funciton will look through
    const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I'
    ,'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2'
    ,'3','4','5','6','7','8','9', '+'];
    
    // The key is the distance of items a character actually is from its 
    // correct character in chars
    const key = 39;
    // Taking the string out of base 64
    let newString = atob(encryptedString)

    //  The rest of the function finds the correct character 
    // in the chars list based on the key and
    //  adds it to the decrypted array.
    let decryptedArray = [];
     for (let i = 0; i < newString.length; i++) {
    
    let currChar = chars.indexOf(newString[i])
    
    // This block handles spaces by checking for + signs.
    // This allows the string to be converted back from base 64
    if (currChar === 62) {
        decryptedArray.push(" ")
        continue;
    }

    if (currChar-key < 0){
        let remainder = (currChar-key)+62;
        decryptedArray.push(chars[remainder])
    } else {let newChar = currChar-key; 
    
        decryptedArray.push(chars[newChar])
    }
    
    
    }
    
    return (decryptedArray.join(""));
};


export default decryptString;