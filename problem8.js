// =================problem8==================
// Write a function that takes an array of objects with a name and age property and returns 
// an object where the keys are the age and the values are arrays of objects with that age. 
// Use the Map object to accomplish this.
names=[{names:"roshin",age:21},{names:"gokul",age:22},{names:"selva",age:21},{names:"jagan",age:22},{names:"singaram",age:22},{names:"vishnu",age:24}]
// obj={}
// names.map((e)=>
// {
//     if(!(e.age in obj)){
//         obj[e.age]=[]
//     }
//     obj[e.age].push(e)
// })
// console.log(obj)
obj=[]
names.map((e)=>
{
    if(!(e.age in obj))
    {obj[e.age]=[]}
    obj[e.age]+=e
    
}
)
console.log(obj);