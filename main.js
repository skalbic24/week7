/* 1. Create an array called ages that contains the following values: 
3, 9, 23, 64, 2, 8, 28, 93.

a. Programmatically subtract the value of the first element in the array from 
the value in the last element of the array.
     Do not use numbers to reference the last element, find it programmatically.
     ages[7] - ages[0] is not allowed!*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);


/* b.Add a new age to your array and repeat the step above to ensure it is dynamic. 
(works for arrays of different lengths).*/

ages.push(100)
console.log ("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);


/* c.Use a loop to iterate through the array and calculate the average age.*/

let sumOfAges = 0;
for(let i=0; i < ages.length; i++){
   // console.log(i, "Test");
   sumOfAges += ages[i];
   console.log("index:", i, "sumOfAges:", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average", average);


/*2. Create an array called names that contains the following values: 
'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
     a.Use a loop to iterate through the array and calculate the average 
     number of letters per name.*/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChars = 0;

for (let i = 0; i < names.length; i++){
    //console.log(i, "Test");
    totalChars += names[i].length;
    console.log("index:", i, "name:", names[i], "totalChars:", totalChars);
}
let averageName = totalChars / names.length;
console.log("Average of Names:", averageName);

     /*b.Use a loop to iterate through the array again and concatenate all 
     the names together, separated by spaces.*/

let concatNames = "";
for (let i = 0; i < names.length; i++) {
    // console.log(i, 'test');
    concatNames = concatNames.concat(names[i] + " ");
    console.log(i, 'Names concatenated', concatNames.trim());
}


/* 3. How do you access the last element of any array?*/

console.log('Last element of ages array:', ages[ages.length - 1]);


/* 4. How do you access the first element of any array?*/

console.log('First element of ages array:', ages[0]);


/* 5. Create a new array called nameLengths. Write a loop to iterate over the 
previously created names array and add the length of each name to the 
nameLengths array.
For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array*/

let nameLengths = [];
for (let i = 0; i < names.length; i++){
    //console.log(i, 'Test');
    nameLengths.push(names[i].length);
}
console.log("Name length array:", nameLengths);


/* 6. Write a loop to iterate over the nameLengths array and calculate the 
sum of all the elements in the array.*/

let charsTotal = 0;
for (let i = 0; i < nameLengths.length; i++) {
    // console.log(i, 'test');
    charsTotal += nameLengths[i];
    console.log("CharsTotal:", charsTotal);
}

/* 7. Write a function that takes two parameters, word and n, as arguments 
and returns the word concatenated to itself n number of times. (i.e. if I 
pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/

function concatWords(word, n) {
    console.log("Word Par:", word, "n Par:", n); 
    let concat = word.repeat(n);
    console.log(concat);    
}
concatWords("Hello", 3);


/* 8. Write a function that takes two parameters, firstName and lastName, and
 returns a full name. The full name should be the first and the last name 
 separated by a space.*/

function fullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    let altName = `${firstName} ${lastName}`
    console.log(altName)
    console.log(fullName);
}
fullName("Sanel", "Kalbic");

/* 9. Write a function that takes an array of numbers and returns true if 
the sum of all the numbers in the array is greater than 100.*/

let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];

function sumNumbersArray(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    // console.log(i, 'test');
    total += array[i]
    console.log("Total:", total);
    }
    if (total > 100) {
        console.log("Total:", total, true);
        return true;
        } else {
            console.log("Total:", total, false);
            return false;
        }
    }
console.log(sumNumbersArray(numbers2), sumNumbersArray(numbers1));


/* 10. Write a function that takes an array of numbers and returns the 
average of all the elements in the array.*/

function calculateNumbersAverage(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        console.log(i, "Test");
        total += array[i];
        console.log("calculate Function, total:", total);
    }
    let average = total / array.length;
    console.log("Average of numbers:", average);

}
calculateNumbersAverage(numbers1);


/* 11. Write a function that takes two arrays of numbers and returns true if 
the average of the elements in the first array is greater than the average 
of the elements in the second array.*/

let numbers3 = [100, 100, 100];

let numbers4 = [100, 100, 99];

function averageOfArray(array){
    let total = 0;
    for(let item of array){
        total += item
    }
    return total/array.length
}
console.log(averageOfArray(numbers3)>averageOfArray(numbers4))

function twoAverages(array1, array2) {
    console.log("Parameters", array1, array2);
    let total1 = 0;
    let total2 = 0;
    for (const number of array1) {
        total1 += number;
        console.log("current number loop1:", number, "Total1:", total1);
    }
    for (const number of array2) {
        total2 += number;
        console.log("Current number loop2:", number, "Total2:", total2);
    }
let average1 = total1 / array1.length;
let average2 = total2 / array2.length;

console.log("Averages", average1, average2);

if (average1 > average2) {
    console.log(true);
        return true;
    } else if (average1 < average2) {
        console.log(false);
        return false;
    } else {
        console.log("Numbers are equal");
    }
}
twoAverages(numbers3, numbers4);

/* 12. Write a function called willBuyDrink that takes a boolean 
isHotOutside, and a number moneyInPocket, and returns true if it is hot 
outside and if moneyInPocket is greater than 10.50.*/


function willBuyDrink(isHotOutside, moneyInPocket) {
    console.log ('Parameters', isHotOutside, moneyInPocket);
    let buyDrink = isHotOutside && moneyInPocket > 10.5;
    console.log('Buy a drink?', buyDrink);
    return buyDrink;
}

willBuyDrink(true, 11);

/* 13. Create a function of your own that solves a problem. In comments, 
write what the function does and why you created it.*/

/* I did a meeting and traffic since I'm always on the go, plus 
I had a mentor meeting scheduled today.*/

let isMeetingScheduled = true;
let isTrafficHeavy = false;  

// Function to check if you can attend the meeting on time
function checkMeetingAttendance() {
    if (isMeetingScheduled) {
        console.log("The meeting is scheduled.");
        
        if (isTrafficHeavy) {
            console.log("Traffic is heavy. You may be late.");
        } else {
            console.log("Traffic is clear. You can make it on time.");
        }
    } else {
        console.log("There is no meeting scheduled.");
    }
}

// Check attendance with current conditions
checkMeetingAttendance();

// Let's change the traffic condition
isTrafficHeavy = true;

// Check attendance again
checkMeetingAttendance();

