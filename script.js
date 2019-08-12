'use strict';

function createGreeting(name, age) {
  
  return `I was born in ${getYearOfBirth(age)}`;
}

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age can not be negative');
  }
  const yearOf = (2019-age);
  return yearOf;
}

try {
  const greeting1 = createGreeting('Joey',26);
  console.log(greeting1);
} 
catch(error) { 
  console.error(error); 
}