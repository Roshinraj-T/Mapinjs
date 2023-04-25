//================= problem7===============
// Write a function that takes an array of numbers and returns an object where the keys are
// the numbers and the values are arrays of their prime factors. Use the Map object to
// accomplish this.
// numbers=[2,7,12,44,26]
// obj={}
// function primeFactor(num){
// }
// numbers.map((e)=>{
//     if(!(e in obj)){

//     }
//      obj[e]=  primeFactor(e)
    
// })
num=[1,2,3,4,5,6,7,8,9,10]
obj={}
num.map((e)=>{
    if(!(e in obj)){
        obj[e]=[]
    }
    for (i=1;i<=e;i++){
    if (e%i==0){
        obj[e].push(i)
    }
    }
})
console.log(obj)

