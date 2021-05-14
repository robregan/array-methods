// map
// reduce
// filter
// forEach
// sort
// slice
// pop
// shift
// push
// unshift
// includes
// indexOf
// every

// Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!

// map(func) – creates a new array from results of calling func for every element. the syntax is..
// map((element) => { ... } )
// map((element, index) => { ... } )
// map((element, index, array) => { ... } )
// example 
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

// using map with an array of objects
let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
  
  let userFullnames = users.map(function(element){
      return `${element.firstName} ${element.lastName}`;
  })
 // arrow stylee!
   // let userFullnames = users.map((e)=> `${e.firstName} ${e.lastName}`)
  
  console.log(userFullnames);
  // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

// reduce method
// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array
// Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.

//syntax 
// reduce((accumulator, currentValue) => { ... } )
// reduce((accumulator, currentValue, index) => { ... } )
// reduce((accumulator, currentValue, index, array) => { ... } )
// reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

//example! add all the numbers in an array
let datArray = [5,10,100,94]
let sum = datArray.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0)

// counting instances of values in an object
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// syntax
// filter((element) => { ... } )
// filter((element, index) => { ... } )
// filter((element, index, array) => { ... } )

// example, take this array, and filter it for words with more than 6 letters
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
// find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//filter invalid entries from JSON
// create a filtered json of all elements with non-zero, numeric id's
let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ]
  
  let invalidEntries = 0
  
  function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true
    }
    invalidEntries++
    return false;
  }
  
  let arrByID = arr.filter(filterByID)
  
  console.log('Filtered Array\n', arrByID)
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  console.log('Number of Invalid Entries = ', invalidEntries)
  // Number of Invalid Entries = 5

  //forEach()
//   The forEach() method executes a provided function once for each array element.
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
// Note: forEach expects a synchronous function. forEach does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callback.

// converting a for loop to forEach
const items = ['item1', 'item2', 'item3']
const copyItems = []

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}

// after
items.forEach(function(item){
  copyItems.push(item)
})

// sort()
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

// sort an array 
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]

function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
To compare numbers instead of strings, the compare function can subtract b from a. The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):

function compareNumbers(a, b) {
  return a - b;
}
The sort method can be conveniently used with function expressions:

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
// ES2015 provides arrow function expressions with even shorter syntax.

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]
// Arrays of objects can be sorted by comparing the value of one of their properties.

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

// The following example creates four arrays and displays the original array, then the sorted arrays. The numeric arrays are sorted without a compare function, then sorted using one.

let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numericStringArray = ['80', '9', '700'];
let numberArray = [40, 1, 5, 200];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // [700, 80, 9]
numericStringArray.sort(compareNumbers); // [9, 80, 700]

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, 700, 80, 9]
mixedNumericArray.sort(compareNumbers); // [1, 5, 9, 40, 80, 200, 700]

// slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//syntax for splice()
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

// Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed

// pop()
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

// shift()
// kinda like pop but removes the first element and returns it.
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

// push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// unshift()
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
let arr = [1, 2]

arr.unshift(0)               // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1)          // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3])        // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5])  // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]

// includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

// syntax
includes(searchElement)
includes(searchElement, fromIndex)

// indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

// every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
[12, 5, 8, 130, 44].every(x => x >= 10);   // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
