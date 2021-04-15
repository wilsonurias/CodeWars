function squareSum(numbers){
    let square = numbers.map(num => num * num)
    let sumOfSquare = square.reduce((acc, i) => acc + i,0)
    return sumOfSquare
}
