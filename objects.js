//object 

//How to create objects in js

//method 1

var customer_details =
{
    "Name":"Robin",
    "Age":"20",
    "phone":"9876014432"
}
console.log(customer_details)
customer_details["id"]="21ECR170"
console.log(customer_details)
console.log(customer_details["phone"])

//in javascript key will not hold quotes due to 

//---------------------------------------------------------------------------------

//method 2

var customer_details={}
customer_details["Name"]="Prakash"
customer_details["Age"]=20
console.log(customer_details)


//------------------------------------------------------------------------------------

//method 3

var college = new Object()
college["fees"]=100000
college["food_review"]="Poor"
college["hsotel_Count"]="10"
console.log(college)
console.log(college.fees)
console.log(college["food_review"])

//---------------------------------------------------------------------------------