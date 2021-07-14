// iven three integers a ,b ,c, return the largest number obtained
//  after inserting the following operators and brackets: +, *, ()


function expressionMatter(a,b,c) {
    let r = Math.max(
        a + b + c,
        a * b * c,
        (a + b) * c,
        a * (b + c),
        a + b * c,
        a * b + c
    )
    return r
    
}