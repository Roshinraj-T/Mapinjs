// ===================problem9==================
// Write a function that takes an array of strings and returns an object where the keys are 
// the strings sorted alphabetically and the values are arrays of the original strings that are 
// anagrams of each other. Use the Map object to accomplish this. 
strings=['roshin','selva']
obj={}
strings.map((e)=>{
    stringAsChar=e.split('')
    charAsSort=stringAsChar.sort()
    alphabaticString= charAsSort.join('')  
    obj[alphabaticString]=e
})
console.log(obj);
