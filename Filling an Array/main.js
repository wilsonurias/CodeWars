// Write a function that produces an array with the numbers 0 to N-1 in it.


function arr(n){
    let newArr = [];
    for(let i = 0; i < n-1; i++){
      newArr.push(i);
    }
    return newArr;
}