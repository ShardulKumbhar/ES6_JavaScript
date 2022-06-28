/****************Inbuilt Function*************** */
let myArray = [1, 2, 3, 4, 5];
let myOutput = "";
//getting the odd numbers using inbuilt filter method
myOutput = myArray.filter((x) => {
  return x % 2;
});
console.log("using inbuilt filter method ", myOutput);

//output [ 1, 3, 5 ]

/*************************Custom function********************************** */

Array.prototype.myfilter = function (predicate) {
  let filteredArray = [];
  let result = "";
  for (let index = 0; index < this.length; index++) {
    result = predicate(this[index], index, this);
    if (result) {
      filteredArray.push(this[index]);
    }
  }
  return filteredArray;
};

myOutput = myArray.myfilter((x) => {
  return x % 2;
});
console.log("using custom filter method ", myOutput);

//output [ 1, 3, 5 ]
