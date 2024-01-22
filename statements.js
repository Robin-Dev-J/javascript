//for loop
var i;
n=10
console.log("The values are: ")
for(i=0;i<n;i++)
{
    console.log(i)
}

//while loop
var sum=0;
var i=0;
n=10
while(i<=n)
{
    sum+=i;
    i++;
}
console.log("The sum is: "+sum)

//do while
i=0
do{
    console.log(i)
}while(i>0)


example1
var i;
arr=[10,20,30]
for(i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//example2
var i;
arr=[10,20,30,20.1,20.2]
for(i=0;i<arr.length;i++)
{
    console.log(arr[i])
}


//example 3
var i;
arr=[10,20,true,false]
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//example4
var i;
var details=[110,"Robin Dev","ECE",true,9.8]
for(i=0;i<details.length;i++)
{
    console.log(details[i]);
}


//for in loop
var college = new Object()
college["fees"]=100000
college["food_review"]="Poor"
college["hostel_Count"]="10"
college["age"]=20
for(values in college)
{
    console.log(values);
}


//for of
for(const values of college)
{
    console.log(values)
}
//error

//for of
arr=[10,20,30]
for(const values of arr)
{
    console.log(values);
}

arr.forEach(element => {
    console.log(element)
});


//1.if 
let isRainy = true;

if (isRainy) {
    console.log("Don't forget your umbrella!");
}

//2.if-else
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote yet.");
}


//3.nested-if
let temperature = 25;
let isSunny = true;

if (temperature > 20) {
    if (isSunny) {
        console.log("It's a hot and sunny day!");
    } else {
        console.log("It's hot, but not sunny.");
    }
} else {
    console.log("It's not very hot today.");
}


//4.switch-case
let playerPosition = "midfielder";
let positionDescription;

switch (playerPosition) {
    case "goalkeeper":
        positionDescription = "The player who defends the goal.";
        break;
    case "defender":
        positionDescription = "The player who guards against opposing players.";
        break;
    case "midfielder":
        positionDescription = "The player who controls the ball in the middle of the field.";
        break;
    case "forward":
        positionDescription = "The player who tries to score goals.";
        break;
    default:
        positionDescription = "Unknown position.";
}

console.log("The",playerPosition,"is",positionDescription);


//5.Ternary Operator
let isRaining = false;

let weatherStatus = isRaining ? "Bring an umbrella" : "No need for an umbrella";
console.log(weatherStatus);