// Complete the function so that it finds the average of the three scores passed to it and 
// returns the letter value associated with that grade.



function getGrade (s1, s2, s3) {
  let averageScore = (s1 + s2 + s3) / 3
  if (averageScore < 60){
    return 'F'
  }else if ((averageScore < 70) && (averageScore >= 60)){
    return 'D'
  }else if((averageScore < 80) && (averageScore >= 70)){
    return 'C'
  }else if((averageScore < 90) && (averageScore >= 80)){
    return 'B'
  }else if (averageScore >= 90){
    return 'A'
  }
}