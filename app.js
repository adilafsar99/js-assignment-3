var chapNumber = +prompt("Enter a chapter number to see its executable tasks:\n(Chapter 9 to 11's and Chapter 12 to 13's tasks are together)");
var taskNumber;
if (chapNumber === 9 || chapNumber === 10 || chapNumber === 11) {

//****** Chapter 9-11 ******
taskNumber = +prompt("Enter a task number to run the task you want to check: (From 1 to 11)");
if (taskNumber === 1) {
//Question 1
var cityName = prompt("Enter city name:");
if (cityName === "Karachi") {
   alert("Welcome to city of lights.");
}
}

else if (taskNumber === 2) {
//Question 2
var gender = prompt("Enter your gender:");
while (gender === null || gender === "") {
	alert("Wrong Input!")
	gender = prompt("Enter your gender:")
}
if (gender.toLowerCase() === "male") {
   alert("Good Morning Sir.");
}
else if (gender.toLowerCase() === "female") {
   alert("Good Morning Ma'am.'");
}
else {
   alert("Good Morning");
}
}

else if (taskNumber === 3) {
//Question 3
var signalColor = prompt("Enter the color of traffic signal:");
while (signalColor === null || signalColor === "") {
   alert("Wrong Input!");
   signalColor = prompt(" Enter the color of traffic signal:");
}
if (signalColor.toLowerCase() === "red") {
		alert("This color means 'Must Stop'.");
}
else if (signalColor.toLowerCase() === "yellow") {
		alert("This color means 'Ready to move'.");
}
else if (signalColor.toLowerCase() === "green") {
		alert("This color means 'Move now'.");
}
else {
		alert("This is not a color of the traffic signal light.");
}
}

else if (taskNumber === 4) {
//Question 4
var remainingFuel = prompt("Enter the remaining fuel of your car in litres:");
while (remainingFuel === null || remainingFuel === "") {
   alert("Wrong Input!");
   remainingFuel = prompt("Enter the remaining fuel of your car in litres:");
}
if (remainingFuel < 0.25) {
   alert("Please refill the fuel in your car!")
}
else {
   alert("You have enough fuel.")
}
}

else if (taskNumber === 5) {
   alert("This task does not run, it is an answer");
}
//Question 5

//a
//Alert works.
//var a = 4;
//if (++a === 5){
//alert("given condition for variable a is true");
//}

//b
//Alert does not work.
//var b = 82;
//if (b++ === 83){
//alert("given condition for variable b is true");
//}

//c
//Condition 2 and Condition 4 works.
//var c = 12;
//if (c++ === 13){
//alert("condition 1 is true");
//}
//if (c === 13){
//alert("condition 2 is true");
//}
//if (++c < 14){
//alert("condition 3 is true");
//}
//if(c === 14){
//alert("condition 4 is true");
//}

//d
//Alert works.
//var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
//alert("The cost equals");
//}

//e
//Alert 1 works.
//if (true){
//alert("True");
//}
//if (false){
//alert("False");
//}

//f
//Alert works.
//if("car" < "cat"){
//alert("car is smaller than cat");
//}

else if (taskNumber === 6) {
//Question 6
var totalMarks = 1, obtMarks1, obtMarks2, obtMarks3;
var percentage, obtMarks = 2, grade, remarks;
while (totalMarks < obtMarks) {
	totalMarks = +prompt("Enter total marks:");
	obtMarks1 = +prompt("Enter marks obtained for subject 1:");
	obtMarks2 = +prompt("Enter marks obtained for subject 2:");
	obtMarks3 = +prompt("Enter marks obtained for subject 3:");
	obtMarks = obtMarks1 + obtMarks2 + obtMarks3;
	if (totalMarks < obtMarks) {
		alert("Your marks are impossible!");
	}
}

percentage = (obtMarks * 100) / totalMarks;
if (percentage >= 80) {
	grade = "A-one";
	remarks = "Excellent";
}
else if (percentage >= 70) {
	grade = "A";
	remarks = "Good";
}
else if (percentage >= 60) {
	grade = "B";
	remarks = "You need to improve";
}
else {
	grade = "Fail";
	remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br />");
document.write("Obtained marks: " + obtMarks + "<br />");
document.write("Percentage: " + percentage + "%<br />");
document.write("Grade: " + grade + "<br />");
document.write("Remarks: " + remarks + "<br />");
}

else if (taskNumber === 7) {
//Question 7
var secretNumber, guessedNumber;
secretNumber = Math.round(Math.random() * 10);
alert(secretNumber)
guessedNumber = +prompt("Guess the secret number: (From 1 to 10)");
while (guessedNumber > 10 || guessedNumber < 1) {
	alert("Your answer is out of range!");
	guessedNumber = +prompt("Guess the secret number: (From 1 to 10)");
}
if (guessedNumber === secretNumber) {
	alert("Bingo! Correct answer.");
}
else if (guessedNumber+1 === secretNumber || guessedNumber-1 === secretNumber) {
	alert("Close enough to the correct answer!");
}
else if (guessedNumber > secretNumber){
	alert("Your answer is too big.");
}
else {
	alert("Your answer is too small.");
}
}

else if (taskNumber === 8) {
//Question 8
var userNumber, isDivisibleBy3 = false;
userNumber = +prompt("Enter a number to see if its divisible by 3:");
if (userNumber % 3 === 0) {
	isDivisibleBy3 = true;
}
if (isDivisibleBy3) {
	alert("Your number is divisible by 3.");
}
else {
	alert("Your number is not divisible by 3.");
}
}

else if (taskNumber === 9) {
//Question 9
var userNumber, isEvenNumber = false;
userNumber = +prompt("Enter a number to see if its even or odd:");
if (userNumber % 2 === 0) {
        isEvenNumber = true;
}
if (isEvenNumber) {
	alert("Your number is even.");
}
else {
	alert("Your number is odd.");
}
}

else if (taskNumber === 10) {
//Question 10
var temperature = +prompt("Enter today's temperature:");
if (temperature > 40) {
	alert("It is too hot outside.");
}
else if (temperature > 30) {
	alert("The weather today is normal.");
}
else if (temperature > 20) {
	alert("Today's weather is cool.");
}
else if (temperature > 10) {
	alert("OMG! Today's weather is so cool.");
}
else {
	alert("The value is outside the program's code")
}
}

else if (taskNumber === 11) {
//Question 11
var firstNumber, secondNumber, operation, result;
firstNumber = +prompt("Enter first number:");
secondNumber = +prompt("Enter second number:");
operation = +prompt("Enter the desired operation's number:\n1)Addition\n2)Subtraction\n3)Multiplication\n4)Division\n5)Modulus");
if (operation === 1) {
	result = firstNumber + secondNumber;
	alert("The sum is " + result + ".");
}
else if (operation === 2) {
	result = firstNumber - secondNumber;
	alert("The difference is " + result + ".");
}
else if (operation === 3) {
	result = firstNumber * secondNumber;
	alert("The product is " + result + ".");
}
else if (operation === 4) {
	result = firstNumber / secondNumber;
	alert("The quotient is " + result + ".");
}
else if (operation === 5) {
	result = firstNumber % secondNumber;
	alert("The remainder is " + result + ".");
}
else {
	alert("Your input for the operation is beyond the scope of this program.")
}
}

else {
   alert("Invalid Input");
}

else if (chapNumber === 12 || chapNumber === 13) {

//****** Chapter 12-13 ******
taskNumber = +prompt("Enter the task number of the task you want to run: (From 1 to 7");
if (taskNumber === 1) {
//Question 1
var userCharacter = prompt("Enter a single character: (Number or Letter)");
while (userCharacter === null || userCharacter === "" || userCharacter.length !== 1) {
	if (userCharacter === null || userCharacter === "") {
		alert("Please enter a character!")
		userCharacter = prompt("Enter a single character: (Number or Letter)");
	}
	if (userCharacter.length !== 1) {
		alert("Please enter a single character!");
		userCharacter = prompt("Enter a single character: (Number or Letter)");	
	}
}
if (userCharacter >= "0" && userCharacter <= "9") {
	alert("Your input is a number.")
}
else if (userCharacter >= "A" && userCharacter <= "Z") {
	alert("Your input is an uppercase letter.")
}
else if (userCharacter >= "a" && userCharacter <= "z") {
	alert("Your input is a lowercase letter.")
}
else {
	alert("Your input is beyond the scope of this program.")
}
}

else if (taskNumber === 2) {
//Question 2
var firstNumber, secondNumber;
firstNumber = +prompt("Enter first number:");
secondNumber = +prompt("Enter second number:");
if (firstNumber > secondNumber) {
	alert(firstNumber + " is greater than " + secondNumber + ".");
}
else if (firstNumber < secondNumber) {
	alert(secondNumber + " is greater than " + firstNumber + ".");
}
else {
	alert("The numbers are equal.")
}
}

else if (taskNumber === 3) {
//Question 3
var number;
number = +prompt("Enter a number:");
if (number > 0) {
	alert(number + " is positive.");
}
else if (number < 0) {
	alert(number + " is negative.");
}
else {
	alert("Your number is 0.");
}
}

else if (taskNumber === 4) {
//Question 4
var userCharacter = prompt("Enter a single letter:");
if (userCharacter === null || userCharacter === "") {
	alert("You didn't enter a value!")
}
else {
	while (userCharacter.length != 1) {
		alert("Your input is more than a single letter!");
		userCharacter = prompt("Enter a single letter:");
}
  userCharacter = userCharacter.toLowerCase()
  if (userCharacter === "a" || userCharacter === "e" || userCharacter === "i" || userCharacter === "o" || userCharacter === "u") {
	alert("Your input is a vowel");
}
  else { 
    alert("Your input is not a vowel.")
  }
}
}

else if (taskNumber === 5) {
//Question 5
var correctPassword = "StRoNg PaSsWoRd";
var userPassword = prompt("Enter your password:");
while (userPassword === "" || userPassword === null) {
	alert("Please enter your password!");
	userPassword = prompt("Enter your password:");
}
if (userPassword === correctPassword) {
	alert("Correct! The password you entered matches the original password.")
}
else {
	alert("Incorrect Password! The original password is " + "'" + correctPassword + "'" + ".")
}
}

else if (taskNumber === 6) {
//Question 6
var greeting;
var hour = +prompt("Enter the current hour:");
if (hour >= 0 && hour < 9) {
   greeting = "Good morning";
   alert(greeting);
}
else if (hour >=9 && hour < 18) {
   greeting = "Good day";
   alert(greeting);
}
else if (hour >=18 && hour < 24) {
   greeting = "Good night";
   alert(greeting);
}
else {
   alert("You input is beyond the scope of this program.");
}
}

else if (taskNumber === 7) {
//Question 7
var time = prompt("Enter time of the day in 24 hours format: (7PM = 1900)");
while (time === null || time === "") {
	alert("Please enter time!");
	time = prompt("Enter time of the day in 24 hours format: (7PM = 1900)");
}
if (time >= 0000 && time < 1200) {
	alert("Good morning");
}
else if (time >= 1200 && time < 1700) {
	alert("Good day");
}
else if (time >= 1700 && time < 2100) {
	alert("Good evening");
}
else if (time >= 2100 && time < 2359) {
	alert("Good night");
}
else {
	alert("Your input is beyond the scope of this program.");
}
}

else {
   alert("Invalid Input!");
}

else {
   alert("Invalid Input!");
}
