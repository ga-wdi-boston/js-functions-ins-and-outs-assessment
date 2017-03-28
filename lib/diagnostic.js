'use strict'

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min (numbersToTest) {

let theMin = numbersToTest[0]

  for (let int i = 1; i < numbersToTest.length; i++){

    if (numbersToTest[i]) < theMin) {
      theMin = numbersToTest[i]
    } //else if
  } //end for

return theMin
} //end function

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum (numbersToTest) {
let theSum = 0

    for (let int i = 0; i < numbersToTest.length; i++){
      theSum += numbersToTest[i]
    } //end for

    return theSum
}

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray (length, defaultValue) {

let returnVal = [length]

for (let int i = 0; i < returnVal.length; i++){
  returnVal[i] = defaultValue
} //end for

return returnVal
}

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument
const newArray = function newArray (length, defaultValue) {

let returnVal = [length]

for (let int i = 0; i < returnVal.length; i++){
  returnVal[i] = defaultValue(i)
} //end for

return returnVal
}

const defaultValue = function (index) {
  return ('This is just a string been returning the value of index:' + index)
};


// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod (/* propertyName, method, obj */) {
Ran out of time..
}

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod
}
