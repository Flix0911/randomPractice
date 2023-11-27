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

// for (let i = 0; i < 100; i++)
//     if(i % 5 == 0){
//         console.log("I found a" + " " + i + "." + " High Five!")
//     } else if (i % 3 === 0){
//         console.log("I found a" + " " + i + "." + " Three is a crowd!")
//     }

//2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.



//Saving Account

//1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//    sum += i
// }
//console.log(sum)
// let bankAccount = sum
// console.log(bankAccount)

// let sumBonus = 0;
// for(let b = 0; b <= 100; b++) {
//     (sumBonus += b* 2)
// }

// console.log(sumBonus)
// let bankAccount2 = sumBonus
// console.log(bankAccount2)



//Fibonacci //I don't fully understand how I would write this but feeling better


// const limit = 4000000;

// let sum = 0;
// let previous = 1;
// let current = 2;

// while (current <= limit) {
//   console.log("Current Fibonacci number:", current);

//   if (current % 2 === 0) {
//     sum += current; {
//   }
// }

//   const next = previous + current;
//   previous = current;
//   current = next;
// }

// console.log("Sum of even-valued terms:", sum);



//Checkerboard - makes no sense

// const boardSize = 8;

// for (let i = 0; i < boardSize; i++) {
//     for (let j = 0; j < boardSize; j++) {
//       if ((i + j) % 2 === 0) {
//         console.log('#');
//       } else {
//         console.log(' ');
//       }
//     }
//   }

//   console.log()








// ---------------------------------------

//Arrays & Conditionals

//Exercises

//Easy does it
//1. Create an array that contains three quotes and store it in a variable called quotes.

// const quotes = ['ask not', 'a new day', 'howdy duty']

//Random
//2. Given the following array const randomThings = [1, 10, "Hello", true]

// const randomThings = [1, 10, "Hello", true]

    //1. how do you access the 1st element in the array?
// console.log(randomThings[0])

    //2. Reassign the value of "Hello" to "World".
// randomThings.splice(2, 1, "world")

    //3. check the value of the array to make sure it updated the array
// console.log(randomThings)


//We've got class

//Given the following array const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"]
// const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"]

    //1. What would you write to access the 3rd element of the array?
// console.log(ourClass[2])

    //2. change the value of "Github" to "Octocat"
// ourClass.splice(2, 1, "Octocat")
// console.log(ourClass)

    //3. add a new element, "cloud City" to the array
// ourClass.splice(4, 0, "Cloud City")
// console.log(ourClass)

//Mix it up

//1. Given the following array const myArray = [5 ,10 ,500, 20]
//const myArray = [5 ,10 ,500, 20]

//2.Using the push method, add the string "Egon" to the end of the array.

// myArray.push("Egon")
// console.log(myArray)

//3. Using a method, remove the string from the end of the array.

// myArray.pop()
// console.log(myArray)

//4. Using the unshift method, add the string "Bob Marley" to the beginning of the array

// myArray.unshift("Bob Marley")
// console.log(myArray)

//5. Using a different method, remove the string from the beginning of the array

// myArray.splice(0, 1)
// console.log(myArray)

//6. Use the reverse method on this array

// myArray.reverse()
// console.log(myArray)

//Biggie smalls
//Write an if..else statement that iterates over the myArray array declared above:

// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] < 21) {
//         console.log(`It seems ${myArray[i]} is less than 21`);
//     }else {
//         console.log(`It seems ${myArray[i]} is greater than 21`);
//     }
// } 

//Monkey in the middle

// const myNumber = 'banana';

// if(myNumber < 5) {
//     console.log("little number")
// } else if (myNumber > 10) {
//     console.log("big number")
// } else {
//     console.log("monkey")
// }



// ----
//What's in your closet

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log("Kristyn is rocking that " + kristynsCloset[3] + " today!")

//2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.

// kristynShoe = kristynsCloset.splice(0, 1)
// console.log(kristynShoe);
// console.log(kristynsCloset);

//3. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

// kristynsCloset.splice(5, 0, "raybans")
// console.log(kristynsCloset)

//4. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// kristynsCloset[4] = "stained knit hat"
// console.log(kristynsCloset)


//5. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

// console.log("Looks like Thom is wearing " + thomsCloset[0][2] + " ," + thomsCloset[1][2] + ", and" + thomsCloset[2][2] + " today!")

//6. In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][1])

//7. Access one item from Thom's accessories array.
// console.log(thomsCloset[2][0])

//8. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!")

//9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

// thomsCloset[1][2] = "Footie Pajamas"

// console.log(thomsCloset[1])


// ------
//HFM

//Write a loop that prints the numbers in order
// const twoDArray = [
//     [9,8,7],
//     [6,5,4],
//     [3,2,1],
//   ];

// let arrayValue = ""

// for (let arrayValue of twoDArray.sort()) {
//     console.log(arrayValue)
// }

// for (let i = 0; i < twoDArray.length; i++) {
//     for (let j = 0; j < twoDArray[i].length; j++) {
//       console.log(twoDArray[i][j]);
//     }
//   }

//   for (const row of twoDArray) {
//     for (const element of row) {
//       console.log(element);
//     }
//   }



// ------------------------------------

//PRoblem solving

//Print greeting

//Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

// function printGreeting(name){
//     return "Hello there, " + name
// }

// console.log(printGreeting("Slimer"))

//Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// function reverseWordOrder(Text){
//     newArray = Text.split(" ")
//        return newArray.reverse()
    
// }

// console.log(reverseWordOrder("Ishmael me Call"));
// console.log(reverseWordOrder("I use Lâncome on my comb"));


//Calculate

//1. Write a function called calculate

//2. this function should take three arguments, two numbers and string

//3. name the parameters num1, num2, and operation

//4. If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

//5. If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

//6. Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

// function calculate(num1, num2, operation){
//     if(operation === "add"){
//         return num1 + num2
//     }else if (operation === "sub") {
//         return num1 - num2
//     } else if(operation === "multi"){
//         return num1 * num2
//     } else if(operation === "div") {
//         return num1 / num2
//     }else if(operation === "exp") {
//         return num1 ** num2
//     }
//     else {
//         return "Unable to compute"
//     }
// }

// console.log(calculate(4, 3, "exp"))

// --

//PrintConsecutives

//1. Write a function printConsecutives that can take an array of any length, and print groups of three numbers where three consecutive numbers increase by 1.

// function printConsecutives(arr) {
//     for (let i = 0; i < arr.length - 2; i++) {
//       if (arr[i] + 1 === arr[i + 1] && arr[i + 1] + 1 === arr[i + 2]) {
//         console.log(`${arr[i]} ${arr[i + 1]} ${arr[i + 2]}`);
//       }
//     }
//   }

//   printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
//   printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);
//   printConsecutives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


// --
//LetterReverse

//1. Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

// function letterReverse(string){
//     newlyFormedArry = string.split(" ")
//     return newlyFormedArry.reverse()
// }


function letterReverse(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }
console.log(letterReverse("Luke I am your father"));
