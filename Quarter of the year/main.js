// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
    if (month >= 10){
      return 4
    }else if (month >= 7){
      return 3
    }else if (month >= 4){
      return 2
    }else {
      return 1
    }
    
  }