function positiveSum(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i]
        }
        
    }
    return total
}

// option #2

function positiveSum(arr) {
    let newArr = arr.filter( val => val > 0)
    let x = newArr.reduce((a, b) => a + b, 0)
    return x
  }
