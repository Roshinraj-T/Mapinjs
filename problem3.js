// -----------------problem3-------------------
// Write a function that takes an array of words and returns an object where the keys are the words and the values are the number of times each word appears in the array. Use the Map object to accomplish this.
function wordCount(arr){
   Count= arr.map((e)=>
    {      
        if(e in obj)
            return obj[e]+=1
        else
            return obj[e]=1
    }
     )
     return obj
}
words=['roshin','gokul','selva','roshin','gokul','ajith','rajiv'];
obj={}
console.log(wordCount(words))