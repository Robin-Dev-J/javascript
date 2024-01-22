//new set initialisation

// Set: collection of unique data or values

// syntax:  var_name=new Set()
       
//example:1

setexample = new Set("aiadmk","congress","bjp")
console.log(setexample)

//the Set constructor in JavaScript expects an iterable object as its argument.
//therefore it considers only first element as an array
//to avoid this pass all argguments inside an array


setexample = new Set(["aiadmk","bjp","congress"])
console.log(setexample)
setexample.add("dmk")
console.log(setexample)

// iterate the set using for in
//note: No output will be printed as it try to access index of elements but there is no indexing in js
for(var elements in setexample)
{
    console.log(elements)
}

//iterate the set using for in
//elements will be iterated as it directly access elements
for(var elements of setexample)
{
    console.log(elements)
}

