//get string character

// let title = 'Mate academy!'

// console.log(title);
// console.log(title.length);

// console.log(title[11]);

// console.log(title[title.length - 3])

// console.log(title.at(3))

// console.log(title.charAt(4))



//String mofification methods
// let title = '  Mate academy   '
// console.log(title, title.length)

// upper and lower case
// console.log(title.toUpperCase())
// console.log(title.toLocaleLowerCase())


//method trim 
// console.log(title.trim())
// console.log(title.trim().length)

// console.log(title.trimStart())
// console.log(title.trimStart().length)

// console.log(title.trimEnd())
// console.log(title.trimEnd().length)

// console.log(title, title.length)

// //method replace
// //how to replace symbol a with -
// console.log(title.replace('a', '-'))

// console.log(title.replaceAll('a', '#'))



//how to find a substring

// const text = 'Mate academy'
// const part = 'mAte'

// console.log(
//   text.toLowerCase().includes(part.toLocaleLowerCase())
// );

// console.log(
//   text.startsWith('ma'),
//   text.endsWith('emy')
// );

// console.log(
//   text.indexOf('a', 1),
//   text.indexOf('a', 2),
//   text.indexOf('a', 6)

// );

// console.log(
//   text.lastIndexOf('ac')
// );


//how to slice a part of a string
// const text = 'Mate academy'

// console.log(
//   text.slice(-11, -1)
// );


//iteration string and count characters
// const title = 'Mate academy'
// let count = 0

// for (let i = 0; i < title.length; i++) { 
//   if (title[i] === 'a') {
//     count++;
//   }
// }
// console.log(count)

// method **for of**

// for (const ch of title) { 
//   if (ch === 'a') { 
//     count++;
//   }
// }

// console.log(count)
//get string character

// let title = 'Mate academy!'

// console.log(title);
// console.log(title.length);

// console.log(title[11]);

// console.log(title[title.length - 3])

// console.log(title.at(3))

// console.log(title.charAt(4))



//String mofification methods
// let title = '  Mate academy   '
// console.log(title, title.length)

// upper and lower case
// console.log(title.toUpperCase())
// console.log(title.toLocaleLowerCase())


//method trim 
// console.log(title.trim())
// console.log(title.trim().length)

// console.log(title.trimStart())
// console.log(title.trimStart().length)

// console.log(title.trimEnd())
// console.log(title.trimEnd().length)

// console.log(title, title.length)

// //method replace
// //how to replace symbol a with -
// console.log(title.replace('a', '-'))

// console.log(title.replaceAll('a', '#'))



//how to find a substring

// const text = 'Mate academy'
// const part = 'mAte'

// console.log(
//   text.toLowerCase().includes(part.toLocaleLowerCase())
// );

// console.log(
//   text.startsWith('ma'),
//   text.endsWith('emy')
// );

// console.log(
//   text.indexOf('a', 1),
//   text.indexOf('a', 2),
//   text.indexOf('a', 6)

// );

// console.log(
//   text.lastIndexOf('ac')
// );


//how to slice a part of a string
// const text = 'Mate academy'

// console.log(
//   text.slice(-11, -1)
// );


//iteration string and count characters
// const title = 'Mate academy'
// let count = 0

// for (let i = 0; i < title.length; i++) { 
//   if (title[i] === 'a') {
//     count++;
//   }
// }
// console.log(count)

// method **for of**

// for (const ch of title) { 
//   if (ch === 'a') { 
//     count++;
//   }
// }

// console.log(count)




// how to reverse a string
const title = "Mate academy";
let reversed = '';

// for (let i = title.length - 1; i >= 0; i--) { 
//      reverse += title[i];
// }

// console.log(reverse)



for (const ch of title) { 
     reversed = ch + reversed;
}

console.log(reversed)
