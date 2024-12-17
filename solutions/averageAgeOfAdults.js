/*
Work only in the solution/*.js file, don't touch the other files.
Fill the function adultsAverageAge(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "name": "Alex Smith",
  "age": 20,
}

Calculate the average age of those users who are adults (above or equal 18). Return the result (as a number).
You do not have to deal with the case, when there are only underage users in the list.

*/

// let users = {
//   "id": 123,
//   "name": "Alex Smith",
//   "age": 20,
// }

function averageAgeOfAdults(users) {
  let numberOfAdults = 0;
  let sumOfAdultAges = 0;
  for (let person of users){
    if (parseInt(person.age) >= 18){
      numberOfAdults += 1;
      sumOfAdultAges += parseInt(person.age);
    }
  }
  let result = sumOfAdultAges / numberOfAdults;
  // console.log(result);
  return result
}

// console.log(averageAgeOfAdults(users));

module.exports = averageAgeOfAdults;
