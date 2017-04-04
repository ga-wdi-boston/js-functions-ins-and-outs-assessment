'use strict'

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function () {
  let result = arguments[0]
// using min here supposedly increases loop performance Note the COMMA
  for (let i = 1, min = arguments.length; i < min; i++) {
    const current = arguments[i]
    result = current < result ? current : result
  }
  return result
}

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum () {
  let result = arguments[0]
  for (let i = 0; i < arguments.length; i++) {
    const current = arguments[i]
    result += arguments[i]
  }
  return result
}

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray (length, deflt) {
  const array = new Array(length)
  for (let i = 0; i < length; i++) {
    array[i] = deflt(i)
  }

  return array
}

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod (propName, method, obj) {
  if (obj !== obj) {
    obj = {}
  }
  obj[propName] = method

  return obj
}

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod
}
