// -----------------problem2-------------------
// Write a function that takes an array of objects with a name property and returns a new array of strings with the name of each object capitalized. Use the Map object to accomplish this.

 function valueOfName(arr){
     return arr.map(e=>(e.name).toUpperCase())
 }
 names=[{'name':'roshin'},{'name':'selva'},{'name':'gokul'},{'name':'jagan'}]
console.log(valueOfName(names))