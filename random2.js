//More lab work

//More problem solving

//1. Calculate the cube
//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.



// function caclculateCube(num1) {
//     return num1 * num1 * num1
// }

// console.log(caclculateCube(5))


//2. Is a Vowel?
//Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

// function isAVowel(str){
//     return (/^[aeiou]$/i).test(str);
//   }
// console.log(isAVowel("h"))


//3. Get Two Lengths
//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths(str1, str2){
    return [str1.length, str2.length];

}

console.log(getTwoLengths("Hank", "Hippopopalous"));

//4. Get multiple lengths
//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths(strings) {
    return strings.map(function(str) {
      return str.length;
    });
  }

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//5. MAximum of Three numbers
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3) {
        return num1
    }else if(num2 > num1 && num2 > num3){
        return num2
    }else {
        return num3
    }
    
}

console.log(maxOfThree(6, 9, 1));
