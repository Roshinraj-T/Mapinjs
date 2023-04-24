//------------------ problem1------------------
// Write a function that takes an array of numbers and returns a new array with each number squared. Use the Map object to accomplish this.
function square(arr){
 return arr.map(e=>  e*e)
}
numbers=[1,2,4,6,8,9,16]
console.log(square(numbers));