// Your task is to create function, isDivideBy, to check if an integer number is divisible by each out of two arguments.


function isDivideBy(number, a, b) {
    if ((number % a === 0) && (number % b === 0)) {
        return true
    } else {
        return false
    }
}