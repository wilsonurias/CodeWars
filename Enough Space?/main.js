// write a simple program telling him if he will be able to fit all the passengers.
// You have to write a function that accepts three parameters:
// Cap is the amount of people the bus can hold excluding the driver.
// On is the number of people on the bus excluding the driver.
// Wait is the number of people waiting to get on to the bus excluding the driver.

// If there is enough space, return 0, 
// and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
    if (cap >=(on + wait)) {
        return 0
    } else if(cap < (on + wait)) {
        return (on + wait) - cap
    }  
}