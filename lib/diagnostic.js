'use strict'

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers

const min = function min () {
  return Math.min.apply(null, arguments)
}

// debug(min(3,2,4,5))

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers

// total = 0
// total = total + arguments[0]
// total = total + arguments[1]
// total = total + arguments[2]
// return total

const sum = function sum () {
  let total = 0
  for (let i = 0; i < arguments.length; i++) {
    total = total + arguments[i]
  }
  return total
}

// debug(sum(2,3,4))


// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue

// [2, 2, 2]
// let array = []
// array[0] = 2
// array[1] = 2
// array[2] = 2
// array.length = 3

const newArray = function newArray (length, defaultValue) {
  let array = []
  for (let i = 0; i < length; i++) {
    array[i] = defaultValue
  }
  return array
}

// debug(newArray(2,4))

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument

const defaultValue = function (stuff) {
  return stuff * 5
}

const newArray2 = function newArray2 (length, callback) {
  const array = []
  for (let i = 0; i < length; i++) {
    array.push(callback(i))
  }
  return array
}

// newArray2(length, defaultValue)

// // Questions 5
// // Write a function that adds or replaces a method on an object
// // using the given propertyName
// // If the argument obj is unset, create a new object
// // The function you write should return
// // the object passed in as an argument or the object created
// const addMethod = function addMethod (/* propertyName, method, obj */) {

// }

// // Used by testing
// module.exports = {
//   min: min,
//   sum: sum,
//   newArray: newArray,
//   addMethod: addMethod
// }
