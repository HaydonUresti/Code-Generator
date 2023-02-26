const decryptString = (encryptedString) => {
    const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I'
    ,'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2'
    ,'3','4','5','6','7','8','9', '+'];
    
    const key = 39;
    let newString = atob(encryptedString)
    // console.log("The original Phrase: ",encryptedString )
    let decryptedArray = [];
     for (let i = 0; i < newString.length; i++) {
    console.log("The curChar: ",newString[i]);
    let currChar = chars.indexOf(newString[i])
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

export default decryptString;