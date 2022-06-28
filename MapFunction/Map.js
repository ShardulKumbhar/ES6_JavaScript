/****************Inbuilt Function*************** */

const multiplyBy4 = function (x) {
  return x * 4;
};
let myArr = [1, 2, 3, 4, 5];

let myOutput = myArr.map(multiplyBy4);
console.log("Using inbuilt map function ", myOutput);

//output  [ 4, 8, 12, 16, 20 ]

/*************************Custom function********************************** */

var arr = [5, 2, 12, 8, 4, 1];
var output = [];
let i;

//returns square of a number
const square = function (num) {
  return num * num;
};

for (i = 0; i < arr.length; i++) {
  output.push(square(arr[i]));
}

console.log("using custom function", output);

// output [ 25, 4, 144, 64, 16, 1 ]

/***********************Custom function documantation*******************************/
/**********************ref- https://medium.com/@dhilipkmr/array-map-bf7656c1a050  *****************/

Array.prototype.mymap = function (callback) {
  //this refers to array which is calling mymap function
  const resultArray = [];
  let result = "";
  for (let index = 0; index < this.length; index++) {
    result = callback(this[index], index, this);
    resultArray.push(result);
  }
  F;
  return resultArray;
};

const divideBy2 = function (x) {
  return x / 2;
};

let myArray = [1, 2, 3, 4, 5];

myOutput = myArray.mymap(divideBy2);
console.log("Using custum mymap function ", myOutput);

// Using custum mymap function  [ 0.5, 1, 1.5, 2, 2.5 ]
