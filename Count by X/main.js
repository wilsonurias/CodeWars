// Create a function with two arguments that will return an array of the first (n) multiples of (x).


function countBy(x,n){
    const x = []
    for (let i = 0; i <= n; i++) {
        x.push(x * i)
    }
    return x
}