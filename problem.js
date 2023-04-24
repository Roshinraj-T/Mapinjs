//------------------ problem1------------------
// numbers=[1,2,4,6,8,9,16]
// console.log(numbers.map(e=>  e*e));

// -----------------problem2-------------------
// names=[{'name':'roshin'},{'name':'selva'},{'name':'gokul'},{'name':'jagan'}]
// console.log(names.map(e=>e.name))

// -----------------problem3-------------------

words=['roshin','gokul','selva','roshin','gokul','ajith','rajiv'];
obj={}
words.map((e)=>
    {      
        if(e in obj)
            return obj[e]+=1
        else
            return obj[e]=1
    }
     )
console.log(obj)