
let arr = [2, 4, 6, 8, 10];

let outputs = "";
//to find the sum
outputs = arr.reduce(function (sum, curr) {
  sum += curr;
  return sum;
}, 0);

console.log("The sum of all element in array ", arr, " is", outputs);

/***********************Custom function *******************************/

function reduceFunction(listofNumbers, callback,initialValue) {
    let result = initialValue;
    for (let index = 0; index < listofNumbers.length; index++) {
      result = callback(result,listofNumbers[index], index, listofNumbers);
    }
    return result;
  }
  //let us try with the example
  const listofNumbers = [2, 4, 6, 8, 10];
  let output = 0;
  
  //to find sum
  output = reduceFunction(listofNumbers, (sum,num) =>{
      sum+=num;
      return sum;
  },0);
  console.log("The sum of all element in array ",output);
  