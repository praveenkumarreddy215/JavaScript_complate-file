// Spread Operator : ...

// spread the array elements and pass it as parameters to other function
let numbers = [798,46,464,6461,8,611984,4,531,1.321,65456,18,60,50,6];
let maxValue = Math.max(...numbers);
console.log(`MaxValue : ${maxValue}`);

// Add an array in the middle of some other array
let array1 = [30,40,50];
let array2 = [10,20,...array1,60,70];
let array3 = [...array2,80,90,100];
console.log(array3);

// Create a Copy of an Array
let tech1 = ['HTML','CSS','JavaScript','AJAX'];
let tech2 = tech1.slice(); // ES5
tech2 = [...tech1]; // Spread Operator from ES6
console.log(tech2);
