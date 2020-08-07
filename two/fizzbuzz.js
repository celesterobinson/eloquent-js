/***
  * Prints numbers to the console but replaces some with words
  * @param {object} range - Range of numbers to print 
  */
const fizzbuzz = ({min, max}) => {
  for (let i = min; i <= max; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

fizzbuzz({min: 9, max: 40});
