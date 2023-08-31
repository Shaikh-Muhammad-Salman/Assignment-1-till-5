// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// if(isNaN(num1) || isNaN(num2)){
//     alert("Givent input is not a number")
// }
// else if(num1>num2){
//     alert(`${num1} is greater than ${num2}`);
// }
// else if(num1<num2){
//     alert(`${num2} is greater than ${num1}`);
// }
// else{
//     alert("Both number are equal"+num1 + "="+num2);
// } //q2

// var number = +prompt("Enter your number");

// if(number===0){
//     alert("Given number is zero");
// }
// else if(number<0){
//     alert("Given number is neagtive");
// }
// else if(number>0){
//     alert("Given number is positive");
// }
// else{
//     alert("Givent input is not a number");
// }  //q3

// var correct_password = "Hello123";
// var password = prompt("Enter your password:");
// if (password === "") {
//     alert("Please enter your password");
// }
// else if (correct_password === password) {
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect password");
// } //q5

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day"; //output good day aega condition true hai
}
else{
     greeting = "Good evening";
} //q6


// Take input from the user
const timeInput = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900):"));

// Validate input
if (timeInput < 0 || timeInput >= 2400) {
    console.log("Invalid input! Time should be between 0000 and 2359.");
} else {
    // Extract hours and minutes
    const hours = Math.floor(timeInput / 100);
    const minutes = timeInput % 100;

    // Convert to 12-hour clock format
    let meridian, formattedHours;
    if (hours === 0) {
        meridian = "AM";
        formattedHours = 12;
    } else if (hours < 12) {
        meridian = "AM";
        formattedHours = hours;
    } else if (hours === 12) {
        meridian = "PM";
        formattedHours = 12;
    } else {
        meridian = "PM";
        formattedHours = hours - 12;
    }

    // Print the result
    console.log(`The time in 12-hour clock format is: ${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${meridian}`);
}

