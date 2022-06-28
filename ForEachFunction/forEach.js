
  /****************Inbuilt Function*************** */
  let myArray = [1, 2, 3, 4, 5];
  //using inbuilt forEach function
  myArray.forEach((num) => {
    console.log(num);
  });
  

  //output -
  // 1
  // 2
  // 3
  // 4
  // 5

/***********************Custom function *******************************/

  Array.prototype.myforEach = function (callback) {
    for (let index = 0; index < this.length; index++) {
      callback(this[index], index, this);
    }
    return;
  };
  //using custom forEach function
  myArray.myforEach((num, i, nums) => {
    console.log(num, i, nums);
  });

//   output 
//   1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]