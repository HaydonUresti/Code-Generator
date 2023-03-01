// A function that takes a string and encodes it.
// Parameters: unencryptedString- The string the user inputs to be encrypted
// Returns: newString- The newly encrypted string
const encryptString = (unencryptedString) => {
    const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I'
    ,'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2'
    ,'3','4','5','6','7','8','9', '+'];
    
    // The key is the distance of items a character actually is from its
    // correct character in chars
    const key = 39

    // The rest of the code takes the user's string and adds changes it to a different
    // character based on the key. After this it is converted to base 64 and returned.
    let newArray = [];
    for (let i = 0; i < unencryptedString.length; i++) {
   
    let currChar = chars.indexOf(unencryptedString[i])
    
    // The following if block handles spaces by changing them to + signs so that the 
    // string can be converted to base 64
    if (unencryptedString[i] === ' '){
        newArray.push('+')
        continue;
    }
    
    if (currChar+key > 62) {
        
        let remainder = (currChar+key)-62;
        
        newArray.push(chars[remainder])
    } else {let newChar = currChar+key; 
    
        newArray.push(chars[newChar])
    }  
    }
   
    let newString =newArray.join("") 
    return (btoa(newString));
    
};


export default encryptString;