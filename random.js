//Lesson 1, lab: just the beginning


// console.log("Making your way in the world today takes everything you've got.");
// console.log("Taking a break from all your worries, sure would help a lot.");
// console.log("Wouldn't you like to get away?");
// console.log("Sometimes you want to go");
// console.log("Where everybody knows your name,");
// console.log("and they're always glad you came.");
// console.log("You wanna be where you can see,");
// console.log("our troubles are all the same");
// console.log("You wanna be where everybody knows");
// console.log("Your name.");

//1. Write a while loop that will log in the console 'ginger chocolate honey patties', 1000 times.
//let i = 0

// while (i < 1000) {
//     console.log('Ginger chooolate honey patties')
//     i++
// }

//2. write another while loop that counts from 0 to 1000

// while (i < 1000) {
//     console.log(i)
//     i++
// }

//3. write another while loop that prints a message to the console and concatenates the current loop number. make it count from 0 to 1000

// while (i < 1000) {
//     console.log(`Current loop number is: ${i}`)
//     i++
// }

// --
//For loops

//1. write a for loop that counts from 0 to 100 and console.logs each number

// for (let i = 0; i < 100; i++)
// console.log(i)

//2. write another foor loop taht counts from 7 to 635

// for (let i = 7; i <= 635; i++)
// console.log(i)

//3. declare a variable let start = 0
//let start = 0
//declare a variable const limit = 100
// const limit = 100

// for(let i = start; i <= limit; i++){
// console.log(i)
// }


// ----

//Lesson 2: Boolean & loops

//Loop it!

//1. create a loop that will print 'hi' 15 times

// for (let i = 0; i <= 15; i++) {
//     console.log('hi');
// }


//2. create a loop that will print "YEP!" 30 times

// for (let i = 0; i <= 30; i++){
//     console.log("YEP!");
// }

// --
//Booleans and loops - part 1

//const sumNum = Math.floor(Math.random() * 100);

// for (let i = sumNum; i < 10; i++) {
//     if(i < 10) {
//         console.log(`${i} that's a small number`)
//     }
// }

// for (let i = sumNum; i < 30; i++){
//     if(i > 10) {
//         console.log(`${i}, that's a big number`)
//     }
// }

// for (let i = sumNum; i < 100; i++){
//     if(i  < 10) {
//         console.log(`${i}, that's a small number`);
//     } else if(i > 10); {
//         console.log(`${i}, that's a big number`)
//     }
// }

// --
//Booleans & loops - part 2

//1. create a variable called faveDay and assign it to your favorite day of the week

//2. create a loop that uses the variable favDay that you created. make a loop that will print 'i like the weekend' if 'favday' equal saturday or sunday. the loop should print 'give me a good ol weekday' if favday is equal to monday, tuesday, wednesday, thursday, or friday

// for(let i = 0; i <= 7; i++){
//     if(i === 6 || i === 7){
//         console.log("i like the weekend")
//     }else if(i <= 5){
//         console.log("give me a good ol'weekday")
//     }
// }

// let fave_day = "december";

// if (fave_day === "Saturday" || fave_day === "Sunday") {
//   console.log("I like the weekend!");
// } else if (fave_day === "monday" || fave_day === "tuesday" || fave_day === "wednesday" || fave_day === "thursday" || fave_day === "friday") {
//     console.log("Give me a good ol weekday")
// } else {
//     console.log("That isn't a day of the week")
// }

// ---------------------------
//Intro to loops and conditionals
// ---------------------------

//Lets get Mathy!

// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16

//Round a down
// aRound = Math.floor(a)
// console.log(aRound)

//Round b up
// bUp = Math.ceil(b)
// console.log(bUp)

//Find the absolute value of b - a
// aBAbsolute = Math.abs(a - b)
// console.log(aBAbsolute)

//Find the largest number of a, b, c, d, e
// largestNumber = Math.max(a, b, c, d, e)
// console.log(largestNumber)

//Find the smallest number of a, b, c, d, e
// smallestNumber = Math.min(a, b, c, d, e)
// console.log(smallestNumber)

//Find the square root of e
// squareOfE = Math.sqrt(e)
// console.log(squareOfE)

//Raise e to the power of d
// exponentiation = Math.pow(e, d)
// console.log(exponentiation)

//Make a digital die 0 generate a random number between 1 - 6
// randomNumber = Math.floor(Math.random() * 6)
// console.log(randomNumber)

// ----
//Strings Activity 1

//Strings - switcharoo

//1. Create a variable called firstVariable.
//2. assign it the value of a string: "Hello World"

// let firstVariable = "hello world";

//3. On the next line, change the value of this variable to a number.
// firstVariable = 10;

//4. store the value of firstVariable into a new variable called secondVariable
// let secondVariable = firstVariable;

//5. On the next line, change the value of secondVariable to a string.
// secondVariable = "a new string"

//6. What is the value of firstVariable?

// console.log(firstVariable)

//Strings - Combine it

//1. Create a variable called yourName and set it equal to your name as a string.
// const yourName = "Erick Valencia"

//2. Write an expression that takes the string "Hello, my name is " and the variable yourName so that it prints a new string with them concatenated
// let restOfExpression = "Hello, my name is"
// let fullGreeting = restOfExpression + " " + yourName

// console.log(fullGreeting)
// console.log(restOfExpression + ` ${yourName}`)

// ----
//Booleans Activity

//Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true.

// const a = 6;
// const b = 100;
// const c = -5;
// const d = 3000;
// const e = 'Jelly Bean';

// a _ b;
// console.log(a < b)
// c _ d;
// console.log(c < d)
// 'Peanut' _ 'Peanut';
// console.log('peanut' === 'peanut')
// a _ b _ c;
// console.log(a < b > c)
// a _ a _ d;
// console.log(a != a < d)
// e _ 'Jelly Bean';
// console.log(e === 'Jelly Bean')
// 48 _ '48';
// console.log(48 !== '48')
// 'e' _ 'Eh'
// console.log(e != 'Eh')

// ----
//The Farm

//1. Write code that will print out "mooooo" if the variable animal is equal to cow.

// let animal = "duck";

// if (animal === 'cow') {
//     console.log("moooo");
    //Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."
// }else if(animal ==! 'cow');{
//     console.log("Hey! You're not a cow")
// }

//Driver's ed

//1. Write a variable that will hold a person's age.
// let currentAge = 50

// if(currentAge > 15) {
//     console.log("Here are your keys");
//     }else if(currentAge < 16){
//     console.log("Sorry, you're too young");
//     }


//Just loop it

//1. Write code that will print out all the numbers in the range 0 - 10.

// for (let i = 0; i < 11; i++)
// console.log(i)

//2. Write code that will print out all the numbers in the range 500 - 50.

// for (let o = 500; o > 50; o--)
// console.log(o)



//Lets get odd

//1. Print out the odd numbers that are within the range of 1 - 100.

// for (let i = 0; i < 100; i++)
//     if(i % 2) {
//         console.log(i + " " + "is an odd number")
//     }



//Give me Five

//1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.

for (let i = 0; i < 100; i++)
    if(i % 5 == 0){
        console.log("I found a" + " " + i + "." + " High Five!")
    } else if (i % 3 === 0){
        console.log("I found a" + " " + i + "." + " Three is a crowd!")
    }

//2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
