//====================== problrm 4=================
// Write a function that takes a string and returns an object where the keys are the characters in the string and the values are the number of times each character appears in the string. Use the Map object to accomplish this
arrayOfLetter=words.split('')
function characterCount(arr){
    Count=arr.map((e)=>
    {      
        if(e in obj)
            return obj[e]+=1
        else
            return obj[e]=1
    }
     )
     return obj
}
words='roshinraj';
obj={}
console.log(characterCount(arrayOfLetter))