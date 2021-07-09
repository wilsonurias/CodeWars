// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need
//  if n < 0 and m < 0 return 0

function paperwork(n,m) {
    if ((n < 0) || (m < 0)) {
        return 0
    }else {
        return n * m
    }
}