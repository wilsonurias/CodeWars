// Given a non-negative integer,
// return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

var countSheep = function(num){
    let result = ''
    for (let i = 1; i <= num; i++){
        result += i.toString() + ' sheep...'
    }
    return result
}