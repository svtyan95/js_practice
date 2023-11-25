// const n = 4;
// let sum = 0;


// for (let i = 1; i <= n; i++) { 
//      sum += i;
//      console.log(i)
// }

// console.log(sum)



// const m = 5;
// const n = 9;
// for (let i = m; i < n; i++) {
//   console.log(i);
// }


//lesson 1//
const title = '   A_polo Star   ';

console.log(title)

console.log(title.length);

console.log(title[title.length - 1 * 6])

console.log(title.at(7))

console.log(title.charAt(6))

//lesson 2//

console.log(
     title.toUpperCase()
)

console.log(
     title.toLowerCase()
)

console.log(
     title.trim(),
     title.trim().length
)

//replace

console.log(
     title.replace('_', 'a')
)

console.log(
     title.replaceAll('o', '2')
)

//lesson 3//

const text = 'Zero of one'
const part = 'E'


console.log(
     text.toLocaleLowerCase().includes(part.toLocaleLowerCase())
)