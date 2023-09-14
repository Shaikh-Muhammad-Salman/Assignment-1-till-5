// for(var i=1 ; i<=10 ; i++){
//     console.log(i);
// } //q3

// var num = +prompt("Enter your number: ");
// var length = +prompt("Enter the length of the table");
// for(i=1 ; i<=length ; i++){
//     var result = num + "x" + i +"="+ num*i
//     console.log(result);
// } //q4

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(i=0 ; i<fruits.length ; i++){
//     console.log(fruits[i]);

// }
// for(i=0 ; i<fruits.length ; i++){
// console.log(`Element at index ${i} is ${fruits[i]}`);
// } //q5


// var item = ["cake", "apple pie", "cookie", "chips", "patties"];
// var getItem = prompt("What do you want?");
// getItem = getItem.toLowerCase();
// for(var i=0 ; i<item.length;i++){
//     if(getItem === item[i]){
    
//     console.log(alert(`${getItem} is availabe at index ${i} in our bakery`))
//     }
    
// }
//     if (getItem !== item){
//     console.log(alert(`We are sorry. ${getItem} is not availabe in our bakery`));
// } //q7


// var number = [24, 53, 78, 91, 12];
// var largestNumber = number[0];
// for(var i = 0; i<number.length ; i++ ){
//     if(number[i] > largestNumber)
//     largestNumber = number[i];
// }
// console.log(largestNumber); //q8


// var number = [24, 53, 78, 91, 12];
// var smallesttNumber = number[0];
// for(var i = 0; i<number.length ; i++ ){
//     if(number[i] < smallesttNumber)
//     smallesttNumber = number[i];
// }
// console.log(smallesttNumber); //q9



let multiplesOf5 = "";

// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of 5
    if (i % 5 === 0) {
        // Append the multiple of 5 to the string
        multiplesOf5 += i + " ";
    }
}

// Print the string of multiples of 5 in a single line

console.log(multiplesOf5); //q10




