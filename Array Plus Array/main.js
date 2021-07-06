// get the sum of two arrays...actually the sum of all their elements. 

function arrayPlusArray(arr1, arr2){
    let newArr1 = arr1.reduce((a,b), a + b, 0)
    let newArr2 = arr2.reduce((a,b) => a+b, 0)
    return newArr1 + newArr2
}


