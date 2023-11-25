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

let fave_day = "december";

if (fave_day === "Saturday" || fave_day === "Sunday") {
  console.log("I like the weekend!");
} else if (fave_day === "monday" || fave_day === "tuesday" || fave_day === "wednesday" || fave_day === "thursday" || fave_day === "friday") {
    console.log("Give me a good ol weekday")
} else {
    console.log("That isn't a day of the week")
}