'use strict';

function createGreeting(name, age) {
  const yearOf = (2019-age);
  return `I was born in ${yearOf}`;
}

const greeting1 = createGreeting();
console.log(greeting1);