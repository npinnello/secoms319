/* 
Nick Pinnello
Feb 8, 2023
Activity06 - Variables 
*/
console.log("----- I am in variables -----");

// Q1 : Is it permited the next ?
console.log("Q1 ---------------")
var var1 = "Iowa";
console.log(var1);
var var1 = 124;
console.log(var1);
// Is it permited ?
console.log("Yes we can define different variables");

// Q2 : Is it valid ?
console.log("Q2 ----------------");
let var2 = "Ames";
console.log(var2);
var2 = 124;
// Is it valid ?
console.log("Not, let does not allow to redefine the same variable");

// Q3 : Is it valid ?
console.log("Q3 ----------------");
let var3 = "ISU";
console.log(var3);
var3 = 2023;
console.log(var3);
console.log("Valid Yes")

// Q4 : Explain the Error.
console.log("Q4 ----------------");
let var4;
const var5 = 0;
console.log("What's the error : need to initialize the variable const ")

// Q5 : Explain the Error.
console.log("Q5 ----------------");
const var6 = 3.1415;
//var6 = 2.8;
console.log("What's the error : it is not possible to change a const value")

// Q6 : Explain the Error.
let firstName = "Abraham";
console.log("cannot have a space in the variable name ");
let numbers = [1,2];
console.log("cannot use numbers in vriable names ");
let citystate = "Ames Iowa";
console.log("cannot use a dash in variable names ");

// Q7 : What !! ??
let mainCity = "DesMoines";
console.log("This is the Capital :", mainCity)
console.log("cannot start with a capitol letter it is case sensitive")

// Q8 : "let" and "const" scope vs "var" scope
if (5 === 5) {
    var var7 = 100;
    }
    console.log(var7);
    if (5 === 5) {
    var var8 = 100;
    }
    console.log(var8);
    console.log("var8 needed to defined with the var parameter")

