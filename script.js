'use strict';

function createGreeting(name, age) {
  if ((!age) || (!name)) {
    throw new Error('Arguments not valid!!!!');
  }
  if ((typeof(age) !== 'number') || (typeof(name) !== 'string')) {
    throw new TypeError();
  }
  if (age < 0) {
    throw new Error('Age can not be negative');
  }
  return `I was born in ${getYearOfBirth(age)}`;
}

function getYearOfBirth(age) {
  const yearOf = (2019-age);
  return yearOf;
}

try {
  const greeting1 = createGreeting('Joey','Joey');
  console.log(greeting1);
} 
catch(error) { 
  console.error(error); 
}