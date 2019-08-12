'use strict';
//function jedyName(firstName, lastName) {
//return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
//}
//console.log(jedyName('Yulia', 'Leon'));

// function beyond (num) {
//   // if (num===Infinity) {
//   //     console.log('And beyond');
//   // }
//   // else if (num===0) {
//   //     console.log('Staying home');
//   // }
//   if (num===Infinity) {
//     console.log('And Beyond');
//   }
//   else {
//     if (num===0) {
//       console.log('Staying home');
//     }
//     else if (num>0) {
//       console.log('To Infinity');
//     }
//     else if (num<0) {
//       console.log('To negative infinity');
//     }
//   }
  
// }
// let value = beyond(Math.pow(10,1000));
//beyond(100);
// function howManyDays(month, leapYear) {
//   switch(month) {
//   case 'January':
//   case 'March':
//   case 'May':
//   case 'July':
//   case 'August':
//   case 'October':
//   case 'Desember':
//     return `${month} has 31 days`;
//   case 'April':
//   case 'June':
//   case 'September':
//   case 'November':
//     return `${month} has 30 days`;
//   case 'February':
//     if (leapYear===true) {
//       return `${month} has 29 days`;
//     }
//     else {
//       return `${month} has 28 days`;
//     }
//   default:
//     return 'Must provide a valid month';
//   }

// }

// let whatMonth = howManyDays('February');
// console.log(whatMonth);
// function decode(str) {
//   let words = str.split(' ');
//   let answer = '';
//   for (let i=0; i<words.length; i++) {
//     if (words[i][0]==='a') {
//       answer+= words[i][1];
//     }
//     else if(words[i][0]==='b') {
//       answer+= words[i][2];
//     }
//     else if(words[i][0]==='c') {
//       answer+= words[i][3];
//     }
//     else if(words[i][0]==='d') {
//       answer+= words[i][4];
//     }
//     else {
//       answer+=' ';
//     }
//   }
//   return answer;
// }

// console.log(decode('craft block argon meter bells brown croon droop'));

function game(num) {
  const randomNo = Math.floor(Math.random() * 3) + 1;
  if (num===1||num===2||num===3) {
    if (num===randomNo) {
      return 'It is a tie';
    }
    //rock=1; paper= 2; scissors=3;
    else if(num===1 && randomNo===2) {
      return 'Computer wins';
    }
    else if(num===1 && randomNo===3) {
      return 'You win';
    }
    else if(num===2 && randomNo===1) {
      return 'You win';
    }
    else if(num===2 && randomNo===3) {
      return 'Computer wins';
    }
    else if(num===3 && randomNo===1) {
      return 'Computer wins';
    }
    else if(num===3 && randomNo===2) {
      return 'You win';
    }
  }
  else {
    throw new Error('Not a valid choice');
  }
}
 
console.log(game(5));