'use strict'

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min () {
  if (arguments.length === 0) {
    return 0
  } else {
  let result = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
    if (result > arguments[i]) {
      result = arguments[i]
    }
  }
    return result
  }
}
//vconsole.log(min(3, 4, 5, 0))
// console.log(min())
// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum () {
  if (arguments.length === 0) {
    return 0
  } else {
  let result = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i]
  }
  return result
}
}
// console.log(sum(3, 5, 6))
// console.log(sum())
// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
let newArray = function newArray (length, defaultValue) {
  const result = []
  for (let i = 0; i < length; i++) {
    result[i] = defaultValue
  }
  return result
}
// console.log(newArray(2, 'fun'))

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument
newArray = function newArray (length, defaultValue) {
  const result = []
  for (let i = 0; i < length; i++) {
    if (typeof (defaultValue) === 'string') {
    result[i] = defaultValue
  } else if (typeof (defaultValue) === 'function') {
    result[i] = defaultValue(i)
  }
  }
  return result
}

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod (propertyName, method, obj) {
  let newObj = {}
    if(obj.length === 0) {
    obj = newObj }
  obj[propertyName] = method()
  return obj
}

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod
}
