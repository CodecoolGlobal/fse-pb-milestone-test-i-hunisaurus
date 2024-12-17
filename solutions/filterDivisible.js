/*
Write the filterDivisible(numbers, divisor) function, that will get an array of numbers and a number.
Your task is to find the numbers in the array that are divisible with the provided number and return them in an array.

Tip
If none of the numbers are divisible by the given number, then return an empty array.
Be mindful of division by 0. If the given number is 0 then return null.
If the array is empty then it should return an empty array.
 */

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let divisor = 3;

function filterDivisible(numbers, divisor) {
    let arrayOfDivisibles = [];
    if (numbers.length < 1){
        return arrayOfDivisibles;
    } else if (divisor === 0){
        return null;
    } 
    
    for (let number of numbers){
        if ((number % divisor) === 0){
            arrayOfDivisibles.push(number);
        }
    }
    return arrayOfDivisibles;

}

module.exports = filterDivisible;
