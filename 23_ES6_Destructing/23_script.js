// Employee Array
let employee = ['John',40,'Manager'];

let eName = employee[0];
let eAge = employee[1];
let eDesg = employee[2];

console.log(`Name : ${eName} Age : ${eAge} Desg: ${eDesg}`);

// Destructing ES6 to declare the variables in a single line
let student = ['Rajan',25,'Engineering'];

let [sName,sAge,sCourse] = student; // Destructing
console.log(`Name : ${sName} Age : ${sAge} Desg: ${sCourse}`);

// Swap between two numbers
let a = 10;
let b = 20;
console.log(`a : ${a} b : ${b}`);
[a , b] = [b , a]; // Destructing
console.log(`a : ${a} b : ${b}`);

// Assign Object data
let mobile = {
    color : 'Black',
    company : 'Lenovo'
};
let {color:m_color , company:m_company} = mobile; // Destructing

console.log(`Color : ${m_color} Company : ${m_company}`);
