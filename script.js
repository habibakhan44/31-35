// QUESTION 1
// let currentDate = new Date();
//  document.write(currentDate);

// QUESTION 2
// let monthNames = [
//     "January", "February", "March", "April", "May", "June", 
//     "July", "August", "September", "October", "November", "December"
// ];
// let currentDate = new Date();
// let currentMonth = currentDate.getMonth();
// alert("Current month: " + monthNames[currentMonth]);

// QUESTION 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDate = new Date();
// var currentDayIndex = currentDate.getDay();
// var shortDay = dayNames[currentDayIndex];
// document.write("Today is " + shortDay);

// QUESTION 4
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if (currentDay === 0 || currentDay === 6) {
//     document.write("It's Fun day!");
// } else {
//     document.write("It's a weekday.");
// }

// QUESTION 5
// var currentDate = new Date();
// var currentDay = currentDate.getDate();
// if (currentDay < 16) {
//     document.write("First fifteen days of the month");
// } else {
//     document.write("Last days of the month");
// }

// QUESTION 6
// let currentDate = new Date();
// let millisecondsSinceEpoch = currentDate.getTime();
// let minutesSinceEpoch = millisecondsSinceEpoch / (1000 * 60);
// document.write("Current Date: " + currentDate + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millisecondsSinceEpoch + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + minutesSinceEpoch + "<br>");


// QUESTION 7
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// QUESTION 8
// var laterDate = new Date(2020, 11, 31);
// document.write("Later date: " + laterDate);


// QUESTION 9
// var ramadanDate = new Date(2015, 5, 18); 
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanDate;
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// document.write(daysPassed  +  "days have been passed since since 1st Ramadan,2015" );

// Question 10
// let referenceDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500");
// let startOf2015 = new Date("Jan 01 2015 00:00:00 GMT+0500");
// let timeDifferenceInMillis = referenceDate - startOf2015;
// let timeDifferenceInSeconds = timeDifferenceInMillis / 1000;
// document.write("Reference Date: " + referenceDate + "<br>");
// document.write( timeDifferenceInSeconds  +   "seconds have been passed since beginning of 2015");


// QUESTION 11
// let currentDate = new Date();
// document.write("Current date: " + currentDate +  "<br>") ;
// currentDate.setHours(currentDate.getHours() - 1);
// document.write("1 hour ago it was: " + currentDate);


// QUESTION 12
// let currentDate = new Date();
// document.write("Current date: " + currentDate +  "<br>") ;
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// document.write("100 years back, it was: " + currentDate);


// QUESTION 13
// let age = prompt("Please enter your age:");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + birthYear);

// QUESTION 14
// let customerName = "ABC Customer";
// let currentMonth = "October";
// let numberOfUnits = 410;
// let chargesPerUnit = 16;
// let latePaymentSurcharge = 350;
// let netAmountPayable = numberOfUnits * chargesPerUnit;
// let grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// netAmountPayable = Math.round(netAmountPayable )
// grossAmountPayable = Math.round(grossAmountPayable ) 
// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: <b>" + customerName + "</b><br>");
// document.write("Month: <b>" + currentMonth + "</b><br>");
// document.write("Number of units: <b>" + numberOfUnits + "</b><br>");
// document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br>");
// document.write("Net Amount Payable (within Due Date): <b>" + netAmountPayable + "</b><br>");
// document.write("Late payment surcharge: <b>" + latePaymentSurcharge + "</b><br>");
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmountPayable + "</b><br>");
