//example 1
//in this case the variable c acts as global and b acts as global
//this is different from functions in functions everything is considered as local scope

{
    var c=10
    let b=7
    console.log(b+c)
}

console.log(c)
// console.log(b)

//example 2
//in this case the var a has value of 10 across the program
//  but the value will be 5 inside the block this is block scope 
var a=10
{
    let a=5
    let b=5
    console.log(a,b)
}
console.log(a)

//Note: There is no big difference between block and local scope