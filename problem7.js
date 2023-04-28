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
// num=[1,2,3,4,5,6,7,8,9,10]
// obj={}
// num.map((e)=>{
    // if(!(e in obj)){
    //     obj[e]=[]
    // }
//     for (i=2;i<=e;i++){
//     if (e%i==0){
//         obj[e].push(i)
//     }
//     }
// })
// console.log(obj)

num=[1,2,3,4,5,6,7,8,9,10,16,2255]
obj={}
num.map((e)=>{
    if(typeof obj[e]=='undefined'){
        obj[e]=[]
    }
    if(isPrime(e)){
        obj[e].push(e)
    }
    else{
    obj[e]=getPrime(e)
    }
})
//================ getPrime function=============
function getPrime(num){
    a=[]
    for(i=2;i<num;i++){
        if((isPrime(i))&&(num%i==0)){
            a.push(i)
            num=num/i
            i=1
            if(isPrime(num)){
                a.push(num)
                break
            }
        }        
        }
        return a
    }
//=========== find prime number============
function isPrime(number) {
    // If the number is less than 2, it's not prime
if (number < 2) {
return false;
  }
    
 // Check for divisors up to the square root of the number
 for (let i = 2; i <= Math.sqrt(number); i++) {
 if (number % i === 0) {
// If a divisor is found, the number is not prime
   return false;
   }
    }
    
    // If no divisors are found, the number is prime
   return true;
    }

console.log(obj)

