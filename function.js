//example 1
//function without argument and without  return type

function print()
{
    console.log("This function does not have argument as well as return type")
}

print()

console.log("")

//---------------------------------------------------------------------------------------------

//example 2
//function with argument and without return type

function fun(a,b)
{
    console.log("Function with argument and return type")
    for(i=a;i<b;i++)
    {
        if(i%2===0)
        {
            console.log("The Number",i,"is even")
        }
        else
        {
            console.log("The Number",i,"is odd")
        }
    }
}

fun(3,9)

console.log("")


//---------------------------------------------------------------------------------------------

//example 3
//function without argument and with return type

function greet()
{
    return "Hello, Welcome"
}

console.log(greet())
console.log("")

//---------------------------------------------------------------------------------------------

//example 4
//function with argument and with return type

function is_odd(a)
{
    if(a%2!==0)
    {
        return true
    }
    else
    {
        return false
    }
}

console.log(is_odd(9))

console.log("")


//---------------------------------------------------------------------------------------------

