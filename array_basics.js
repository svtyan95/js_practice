
// //how to create an array 
// // const words = ['one', 'two', 'three']
// // const numbers = [1, 3, 1, 5, 2, 1, 4]

// // console.log(words, numbers)
// // console.log([])
// // console.log(['Sviat', 28, true]) // true

// // const numbers2 = new Array(1, 3, 1, 5, 2, 1, 4);
// // const numbers3 = Array(1, 3, 1, 5, 2, 1, 4);

// // console.log(numbers2, numbers3)

// // const userName = "Sviat"
// // console.log(
// //      userName.split(''),
// //      [...userName],
// //      Array.from(userName),
// // )


// // for (let i = 0; i < words.length; i++) { 
// //      console.log(words[i])
// // }


// // for (const n of numbers) { 
// //      console.log(n)
// // }

// // how to modify an array 

// // const numbers = [0, 1, 2, 3, 4];
// // console.log(numbers);

// // numbers[2] = 99;
// // console.log(numbers)

// // numbers[6] = 100;
// // console.log(numbers)

// //додати новий елемент за допомогою довжини масиву
// // numbers[numbers.length] = 19;
// // numbers[numbers.length] = 19;
// // numbers[numbers.length] = 19;

// // console.log(numbers)


// //method PUSH - додає новий елемент

// // numbers.push(100)
// // console.log(numbers)

// // numbers.push(101, 102, 103)
// // console.log(numbers)


// //method pop - останній елемент видаляє елементи 

// // numbers.pop()
// // console.log(numbers)

// // numbers.pop()
// // console.log(numbers)

// //це як видалити останній елемент і вивести його 
// // const n = numbers.pop()
// // console.log(n)

// // const b = numbers.pop()
// // console.log(b)


// //method unshift - додає елементи на початку
// // numbers.unshift(7)
// // console.log(numbers)

// // numbers.unshift(12)
// // console.log(numbers)


// //method shift - віднімає елемент на початку 
// // numbers.shift()
// // console.log(numbers)

// // numbers.shift()
// // console.log(numbers)

// // numbers.shift()
// // console.log(numbers)

// // const o = numbers.shift()
// // console.log(o)


// // how to find an element in an array - розглянемо методи які позволяють перевіряти наявність елемента 

// // const words = ['first', 'name', 'and', 'last', 'name'];
// // console.log(words)

// // //methods includes
// // console.log(
// //      words.includes('and'), //true
// //      words.includes('and', 3), //false - номер 3 це ми передаєм індекс з якого почати пошук 
// //      words.includes('a'), //false
// // )

// // //methods indexOf
// // console.log(
// //      words.indexOf('name'), // 1
// //      words.indexOf('name', 3), // 4
     
// // )

// // //methods lastIndexOf шукати задом на перед
// // console.log(
// //      words.lastIndexOf('name'), // 4
// //      words.lastIndexOf('name', 3), // 1
// // )


// //split, join, slice

// // це яе порозділювати усі символи цілого рядка на екремі
// // const phrase = 'My name is Sviat'
// // const words = phrase.split('')

// // console.log(words)

// //якщо в методі split між лапками поставити пробіл тоді ми зможемо отримати розділення по словах а не по буквах 

// // const phrase = 'My name is Sviat'
// // const words = phrase.split(' ', 2)
// // // другий символ ми мджемо передати на якому слові-індексі закінчити

// // console.log(words)


// // як перетворити масив на рядок 
// // const phrase = 'My name is Sviat'
// // const words = phrase.split(' ')

// // console.log(words)
// // console.log(words.join('-'))


// //method SLICE
// // const phrase = 'My name is Sviat'
// // const words = phrase.split(' ')

// // console.log(words)
// // console.log(words.slice(2))



// //how to get array statistics
// // const result = getSum([2, 5, 13, 4, 5, 1, 6, 12, 9, 8]);
// // console.log(result);

// // function getSum(numbers) { 
// //      let sum = 0;

// //      for (const n of numbers) { 
// //           sum += n
// //      }

// //      return sum;
// // }

// //якщо потрібно знайти середнє значення 
// // const result = getSum([2, 5, 13, 4, 5, 1, 6, 12, 9, 8]);
// // console.log(result);

// // function getSum(numbers) { 

// //      if (numbers.length === 0) { 
// //           return 0; 
// //      }

// //      let sum = 0;

// //      for (const n of numbers) { 
// //           sum += n;
// //      }

// //      return sum / numbers.length ;
// // }


// // як окреглити число до цілого значання 

// // const result = getSum([2, 5, 13, 4, 5, 1, 6, 12, 9, 7]);
// // console.log(result);

// // function getSum(numbers) { 

// //      if (numbers.length === 0) { 
// //           return 0; 
// //      }

// //      let sum = 0;

// //      for (const n of numbers) { 
// //           sum += n;
// //      }

// //      console.log(sum)

// //      // return Math.floor(sum / numbers.length); // це округлити до нижнього значення 
// //      // return Math.ceil(sum / numbers.length); // це округлити до верхнього значення 
// //      return Math.round(sum / numbers.length);

// // }


// //як знайти мінімалень значення 

// const result = getSum([2, 5, 13, 4, 5, 1, 6, 12, 9, 7]);
// console.log(result);

// function getSum(numbers) { 

//      if (numbers.length === 0) { 
//           return 0; 
//      }

//      let sum = 0;
//      let min = numbers[0]; // це як знайти найменше 
//      let max = numbers[0]; // як найбільше 

//      // це як знайти найменше
//      // for (const n of numbers) {
//      //      if (n < min) {
//      //           min = n;
//      //      }
//      //      sum += n;
//      // }
     
//      // як найбільше 
//         for (const n of numbers) { 
//           if (n > max) { 
//                max = n;
//           }
//           sum += n;
//      }

//      console.log(max)

//      // return Math.floor(sum / numbers.length); // це округлити до нижнього значення 
//      // return Math.ceil(sum / numbers.length); // це округлити до верхнього значення 
//      return Math.round(sum / numbers.length);

// }