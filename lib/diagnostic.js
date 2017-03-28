'use strict'

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min () {
  // let result = null
  let result = null

  for (let i = 0; i < arguments.length; i++) {
    if (result > arguments[i]) {
      result = arguments[i]
    } else {
      continue
    }
    return result
  }
}
min(1, -2)

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum () {
  let result = null

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }
  return result
}

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray (length, defaultValue) {
  const array = new Array(length)
  for (let i = 0; i < array.length; i++) {
    array[i] = defaultValue
  }
  return array
}
newArray(4, 12)

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument

const newArray2 = function newArray2 (length, defaultValue) {
  const array = new Array(length)
  for (let i = 0; i < array.length; i++) {
    if (typeof newArray2 === 'function') {
      array[i] = defaultValue(array[i])
    } else {
      array[i] = defaultValue
    }
    return array
  }
}
newArray2(4, min())

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod (/* propertyName, method, obj */) {

}

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod
}
