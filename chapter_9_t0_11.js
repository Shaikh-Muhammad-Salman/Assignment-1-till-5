// var city = prompt("Enter your city");
// if(city.toLowerCase() === "karachi"){
//     alert("Welcome to city of lights");
// } //q1
// var gender = prompt("Enter your gender");
// if(gender.toLowerCase() === "male"){
//     alert("Good Morning Sir");
// }
// else if(gender.toLowerCase() === "female"){
//     alert("Good Morning Ma'am");
// }
// else{
//     alert("Error")
// } //q2
// var color = prompt("Enter the signal light color");
// if(color.toLowerCase()=== "red"){
//     document.write("Must stop");
// }
// else if(color.toLowerCase()=== "yellow"){
//     document.write("Ready to move");
// }
// else if(color.toLowerCase()=== "green"){
//     document.write("Must now");
// }
// else{
// document.write("Inavlid color");
// } //q3


// var fuel = prompt("Remainig fuel in litre of your car");
// if(fuel <= 0.25){
//     alert("Please refill the fuel in your car");
// } //q4



// var a = 4; 
// if (++a === 5){ alert("given condition for variable a is true"); } // condition true
// var b = 82; 
// if (b++ === 83){ alert("given condition for variable b is true"); } // condition false
// var c = 12; 
// if (c++ === 13){ alert("condition 1 is true"); } // condition false
// if (c === 13){ alert("condition 2 is true"); } // condition true
// if (++c < 14){ alert("condition 3 is true"); } // condition false
// if(c === 14){ alert("condition 4 is true"); } // condition true
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ alert("The cost equals"); } // condition true
// if (true){ alert("True"); } // condition true
// if (false){ alert("False"); } // condition false
// if("car" < "cat"){ alert("car is smaller than cat"); }   // condition true string cheeck ke r baad mai ata t pehle
// //q5


// al_marks = 1100 ; 
// var obtain_marks = parseFloat(prompt("Enter your marks"));
// var percentage = (obtain_marks/total_marks)*100;
// if( percentage >= 80 ){
//      console.log("You obtain A grade");
//      console.log("Excellent");
// }
// else if (percentage >= 70 && percentage < 80 ){
//     console.log("You obtain B grade");
//     console.log("Good");
// }
// else if (percentage >= 60 && percentage < 70 ){
//     console.log("You obtain C grade");
//     console.log("Work hard");
// }
// else if (percentage >= 50 && percentage < 60 ){
//     console.log("You obtain D grade");
//     console.log("You need to improve");
// }

// else{
//     console.log("Failed");
//     console.log("Sorry");
// } //q6

// var num = 7 ;
// var guess = parseInt(prompt("Enter any number to check its right guess or wrong:")) 
// if (guess === num ){
//     alert("Bingo! Correct answer");
// }
// // else if (Math.abs(num - guess) === 1){
//     else if(guess=== 8){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Incorrect number")
// } //q7

// var a1 = parseInt(prompt("Enter any number to check if its divisible by 3 or not"))
// if(a1%3=== 0){
//     alert("Huraah! Given number is divisble by 3");
// }
// else{
//     alert("Given number is NOT divisble by 3");
// } //q8


// var number = prompt("Enter number to check even or odd");

// if((number%2)=== 0){
//     console.log("The given number "+number+" is even");
    
// }else{
//     console.log("The given number "+number+" is odd");
// } //q9

// var temp = parseFloat(prompt("Enter temperature in °C: "))
// if(temp> 40){
//     alert("It is too hot outside");
// }
// else if(temp>30 && temp<=40){
//     alert("The Weather today is Normal");
// }
// else if(temp>20 && temp<=30){
//     alert("Today’s Weather is cool")
// }
// else if(temp>10 && temp<=20){
//     alert("OMG! Today’s weather is so Cool")
// }
// else{
//     alert("I'm Freezing man");  
// }  //q10

var num1 = parseFloat(prompt("Enter first numer: "));
var num2 = parseFloat(prompt("Enter second numer: "));
var operator = prompt("Enter any operator from any one of the following: (+,-,*,/,%)");
if(operator === "+"){
    alert(`num1 + num2 is = ${num1+num2}`);
}
else if(operator === "-"){
    alert(`num1 - num2 is = ${num1-num2}`);
}
else if(operator === "*" || operator === "x" ||operator === "X"){
    alert(`num1 x num2 is = ${num1*num2}`);
}
else if(operator === "/"){
    alert(`num1 / num2 is = ${num1/num2}`);
}
else if(operator === "%"){
    alert(`num1 % num2 is = ${num1%num2}`);
}
else{
    alert("Invalid operator")
}