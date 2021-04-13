function findDifference(a,b){
    let vol1 = a.reduce((acc, val) => acc * val, 1)
    let vol2 = b.reduce((acc, val) => acc * val, 1)
    return Math.abs(vol1 - vol2)
}