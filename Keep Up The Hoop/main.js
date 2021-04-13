// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message

function hoopCount(n){
    if (n >= 10) {
        return 'Great, now move on to tricks'
    } else if(n < 10){
        return 'Keep at it until you get it'
    }
}