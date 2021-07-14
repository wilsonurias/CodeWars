// Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer 


function cockroachSpeed(s) {
    let cmPerHr = s * 1000 * 100
    let cmPerSec = cmPerHr / 60 / 60
    return Math.floor(cmPerSec)
  }