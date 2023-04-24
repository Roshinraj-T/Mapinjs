// ========================problem 5====================
// Write a function that takes an array of objects with a category property and returns an object where the keys are the categories, and the values are arrays of objects with that category. Use
details=[{phonename:'redmi',ram:'8gb',category:'mid-range'},{phonename:'vivo',ram:'6gb',category:'low-range'},{phonename:'realme',ram:'6gb',category:'high-range'},{phonename:'redmi',ram:'4gb',category:'low-range'},{phonename:'vivo',ram:'8gb',category:'high-range'}]
obj={};
function category(arr){
   Category= arr.map((e)=>{
        if(!(e.category in obj)){
            obj[e.category]=[]
    
        }
        obj[e.category].push(e)
    })
    return obj
}

console.log(category(details));