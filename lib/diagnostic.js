'use strict'

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min (array) {
  let result = array[0]
  for (let i = 0; i < array.length; i++) {
    if (result > array[i]) {
      result = array[i]
    }
  }
  return result
}

// Example of calling the function
min([1,2,3]) // --> returns 1

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum (array) {
  let result = 0
  for (let i = 0; i < array.length; i++) {
    result += array[i]
  }
  return result
}

// Example of calling the function
sum([1,2,3]) // --> returns 6

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray (length, defaultValue) {
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = defaultValue
  }
  return result
}

// Example of calling the function
newArray(4, 'hello')

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument

const newArray = function newArray (length, defaultValue) {
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = defaultValue
  }
  return result
}

// Ran out of time to write this part...
const elementIndex = function (i) {
  let result =
}

// Example of calling the function
newArray(4, elementIndex)

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created

// Create an object
const student = {
  name: 'Nari',
  location: 'Boston'
}

const localInd = function (obj, property) {
  if (obj.property === 'Boston') {
    console.log('This is a local student')
  }
}

localInd(student, location)

const addMethod = function addMethod (propertyName, method, obj) {
  obj[propertyName] = method
  return obj
}

// Call the function
addMethod(localIndicator, localInd, student)

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod
}
