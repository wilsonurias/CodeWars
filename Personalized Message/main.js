// Create a function that gives a personalized greeting. 
// This function takes two parameters

function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss'
    } else {
        return 'Hello guest'
    }
}