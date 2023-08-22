// var a = 10 ;
// document.write("Result");
// document.write("<br>")
// document.write("The value of a is: "+a);
// document.write("<br>")
// document.write("<hr>")
// ++a;
// document.write("The value of ++a is: "+a);
// document.write("<br>")
// document.write("Now the value of ++a is: "+a);
// document.write("<br>")
// document.write("<hr>")
// a++;
// document.write("The value of a++ is: "+"11");
// document.write("<br>")
// document.write("Now the value of a++ is: "+a);
// document.write("<br>")
// document.write("<hr>")
// --a;
// document.write("The value of --a is: "+a);
// document.write("<br>")
// document.write("Now the value of --a is: "+a);
// document.write("<br>")
// document.write("<hr>")
// a--;
// document.write("The value of a++ is: "+"11");
// document.write("<br>")
// document.write("Now the value of a++ is: "+a);
// document.write("<br>")
// document.write("<hr>")   //q1

// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--;//[(1-0)+(1+1)] a= 1 b=0
// document.write(a);
// document.write("<br>")
// document.write(b);
// document.write("<br>")
// document.write(result);
// document.write("<br>") //q2

// var a=prompt("Enter your name");
// alert("Hello "+a); //q3


var userInput = prompt("Enter a number for multiplication table:");

// Convert user input to a number
var number = parseInt(userInput);

// If user input is not a valid number, default to 5
if (isNaN(number)) {
    number = 5;
}

console.log("Multiplication Table of " + number);


for (var i = 1; i <= 10; i++) {
    var result = number * i;
    console.log( number + " x " + i + " = " + result);
}  //q5


var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

// Total marks for each subject
var totalMarks = 100;

// Prompt user for obtained marks
var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

// Calculate total obtained marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Display the results in a table
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("</table>");

// Display total obtained marks and percentage
document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");