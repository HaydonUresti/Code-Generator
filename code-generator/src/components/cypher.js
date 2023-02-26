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
    let newString =newArray.join("") 
    return (btoa(newString));
    
};


// encryptString(str)

// export default { encryptString, decryptString };
export default encryptString;