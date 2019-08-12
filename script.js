'use strict';

function createGreeting(name, age) {
  
  return `I was born in ${getYearOfBirth(age)}`;
}

function getYearOfBirth(age) {
  const yearOf = (2019-age);
  return yearOf;
}

const greeting1 = createGreeting('Joey',26);
console.log(greeting1);