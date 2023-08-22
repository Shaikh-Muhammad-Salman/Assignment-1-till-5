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



// var b = prompt("Enter your number");
// if(b === null){
//     b= 5 ;
// }
// console.log(b+" x 1 = "+b*1) ;
// console.log(b+" x 2 = "+b*2) ;
// console.log(b+" x 3 = "+b*3) ;
// console.log(b+" x 4 = "+b*4) ;
// console.log(b+" x 5 = "+b*5) ;
// console.log(b+" x 6 = "+b*6) ;
// console.log(b+" x 7 = "+b*7) ;
// console.log(b+" x 8 = "+b*8) ;
// console.log(b+" x 9 = "+b*9) ;
// console.log(b+" x 10 = "+b*10) ; //q5
 

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