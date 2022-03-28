//Assignment 1: Function and Array
function max(arr) {
  // your code here, for-loop method preferred
  if (arr.length === 0) return 'Array is empty';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr[arr.length - 1];
}
// console.log(max([1, 2, 4, 5])); // result to 5
// console.log(max([5, 2, 7, 1, 6])); // result to 7

//Assignment 2: Object
function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}

function constructObject(n1, n2, op) {
  let data = {};
  data.n1 = n1;
  data.n2 = n2;
  data.op = op;
  return data;
}

class ConstructObject {
  constructor(n1, n2, op) {
    let result = {};
    result.n1 = n1;
    result.n2 = n2;
    result.op = op;
    this.data = result;
    return this.data;
  }
}

//Assignment 3: Function, Array, and Object
function avg(data) {
  if (data.size === 0) return 'products is empty';

  let sum = 0;
  for (let i = 0; i < data.size; i++) {
    sum += data.products[i]["price"];
  }
  return (sum / data.size).toFixed(2);
}
// console.log(
//   avg({
//     size: 3,
//     products: [
//       {
//         name: "Product 1",
//         price: 100
//       },
//       {
//         name: "Product 2",
//         price: 700
//       },
//       {
//         name: "Product 3",
//         price: 250
//       }
//     ]
//   })
// ); // show the average price of all products

//Assignment 4: HTML DOM and Event Handling
//Request 1: Click to Change Text.
const text = document.querySelector("#message");
let isChangeText = false;
text.addEventListener('click', () => {
  isChangeText = !isChangeText;
  if (isChangeText) {
    text.textContent = "Have a Good Time!";
  } else {
    text.textContent = "welcome message";
  }
})

//Request 2: Click to Show/Close Menu.
const navButton = document.querySelector(".small-device");
const navList = document.querySelector(".nav-bar");
const closeButton = document.querySelector("nav .close");
navButton.addEventListener('click', () => {
  navList.classList.remove("hide");
})

closeButton.addEventListener('click', () => {
  navList.classList.add("hide");
})

//Request 3: Click to Show More Content Boxes.
const addProductBtn = document.querySelector(".add-product-btn");
const addProductList = document.querySelector("#add-product-list");
let isShow = false;

addProductBtn.addEventListener('click', () => {
  isShow = !isShow;
  if (isShow) {
    addProductList.classList.remove("hide");
  } else {
    addProductList.classList.add("hide");
  }
})

//Assignment 5: Algorithm Practice (Advanced Optional)
function twoSum(nums, target) {
  if (nums.length === 0) return "The array is empty!";

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
        return result;
      }
    }
  }

  if (result.length === 0) return "No two sum solution!";
}
//console.log(twoSum([2, 7, 11, 15], 9));