// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
// Return the resulting string.

function fakeBin(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] < 5) {
            newStr += 0
        } else {
            newStr += 1
        }   
    }
    return newStr
    
}

