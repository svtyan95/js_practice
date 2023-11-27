// // get string character
// const title = 'Mate academy'
// console.log(title)
// console.log(title.length)
// console.log(title.length - 1)
// console.log(title.length - 4)

// //method add
// console.log(title.at(-1))
// console.log(title.charAt(20))



//sting modification methods
// const title = '  Mate academy  '
// console.log(title, title.length)

// //upper,lower case
// //DOWN
// console.log(
//      title.toLowerCase()
// )
// //UP
// console.log(
//      title.toUpperCase()
// )

// //trim
// console.log(title)
// console.log(
//      title.trim(), //trimLeft(), trimRight()
//      title.trim().length
// )

// // replace
// console.log(
//      title.replace('a', '+')
// )

// console.log(
//      title.replaceAll('e', '_')
// )



// //how to find a substring

// const text = 'Mate academy';
// const part = 'mAte'

// console.log(
//      text.includes(part)
     
// );

// console.log(
//      text.toLowerCase().includes(part.toLowerCase())
// );

// console.log(
//      text.startsWith('Ma'),
//      text.endsWith('emy')
// )

// console.log(
//      text.indexOf('a'),
//      text.indexOf('a', 2),
//      text.indexOf('a', 6)

// )


// console.log(
//      text.lastIndexOf('a'),
// )

// //how to slice a part of a string 
// console.log(
//      text.slice(-5, -1),
// )

// console.log(
//      text.slice(2, 8)
// )




//Iterate string and count characters

// const title = 'Mate academy';
// let count = 0;

// // for (let i = 0; i < title.length; i++) { 
// //      if (title[i] === 'a') {
// //           count++;
// //      }
// // }

// for (const ch of title) {
//      if (ch === 'a') {
//                     count++;

//      }
// }

// console.log(count)





// How to reverse a string
const title = 'Mate academy';
let reverse = '';

for (let i = title.length - 1; i >= 0; i--) { 
     reverse += title[i]
}

//цикл of 
for (const ch of title) { 
     reverse = ch + '-'+ reverse;
}

console.log(reverse)






// // const n = 4;
// // let sum = 0;


// // for (let i = 1; i <= n; i++) { 
// //      sum += i;
// //      console.log(i)
// // }

// // console.log(sum)



// // const m = 5;
// // const n = 9;
// // for (let i = m; i < n; i++) {
// //   console.log(i);
// // }


// //lesson 1//
// const title = '   A_polo Star   ';

// console.log(title)

// console.log(title.length);

// console.log(title[title.length - 1 * 6])

// console.log(title.at(7))

// console.log(title.charAt(6))

// //lesson 2//

// console.log(
//      title.toUpperCase()
// )

// console.log(
//      title.toLowerCase()
// )

// console.log(
//      title.trim(),
//      title.trim().length
// )

// //replace

// console.log(
//      title.replace('_', 'a')
// )

// console.log(
//      title.replaceAll('o', '2')
// )

// //lesson 3//

// const text = 'Mate academy'
// const part = 'mAte'


// // console.log(
// //      text.includes(part)
// // )

// console.log(
//      text.toLocaleLowerCase().includes(part.toLocaleLowerCase())
// )

// console.log(
//      text.startsWith('ac'),
//      text.endsWith('emy')
// )

// console.log(
//      text.indexOf('a'),
//      text.indexOf('a', 2),
//      text.indexOf('a', 6),
// )


// console.log(
//      text.indexOf('emy')
// )



const string = 'Do you have any hobbies?';
let result = '';

for (const char of string) {
  if (char !== ' ') {
    result += char;
  } 
}

console.log(result);