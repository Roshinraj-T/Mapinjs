//======================= problem10=================
// Write a function that takes an array of objects with a date property and returns an object 
// where the keys are the year and the values are arrays of objects with that year. Use the 
// Map object to accomplish this. 
names=[
    {names:"roshin",age:21,date:'2001-9-2'},
    {names:"gokul",age:22, date:('2000-6-3')},
    {names:"selva",age:21,date:('2001-11-20')},
    {names:"jagan",age:22,date:('2000-9-12')},
    {names:"singaram",age:22,date:('2000-5-3')},
    {names:"vishnu",age:24,date:('1998-9-12')}]
obj={}
names.map((e)=>
{
    let x = new Date(e.date).getFullYear()
        if(!(x in obj)){
        obj[x]=[]
    }

    obj[x].push(e)

})
console.log(obj)