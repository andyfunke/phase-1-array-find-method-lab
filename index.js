// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

function superbowlWin(objectArray){
   const returnValue = objectArray.find(element => element.result === 'W');
   if (returnValue){
    return returnValue.year
   }
//    else return undefined;
   
}

// superbowlWin(record);

