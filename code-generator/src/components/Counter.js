// A class that saves, adds to, and returns local storage values. 
// These values are the number of times the user has done something.
class Counter {
// Sets the initial local storage value on creation
constructor(pageCounter) {
    this.count = Number(localStorage.getItem(pageCounter))
}
// A method that performs the counting by adding 1 to the current value
// Parameters: pageCounter: The local storage key (Which page the value is stored for)
// Returns: None
addTo(pageCounter) {
    localStorage.setItem(pageCounter, this.count+1)
}

// A method that returns the value of the local storage value based on the key called in the file.
// Parameters: None
// Returns: The value saved in local storage.
reportCount(){
    return this.count
}

// A method that takes 1 from the current value of the selected page's value.
// Parameters: pageCounter - The value for the selected page. 
// Returns: None
subtractFrom(pageCounter) {
    localStorage.setItem(pageCounter, this.count-1)
}
}

export default Counter;