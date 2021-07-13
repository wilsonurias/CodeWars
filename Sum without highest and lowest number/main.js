// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// If array is empty, null or None, or if only 1 Element exists, return 0.


function sumArray(array) {
    if (array == null)
    {
        return 0;
    }
    else if (array.length < 2)
    {
        return 0;
    }
    else
    {
        array = array.sort(function(a,b) {return a - b;});
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
}