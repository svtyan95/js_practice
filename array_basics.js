

const words = ['one', 'two', 'three']
const numbers = [1, 3, 1, 5, 2, 1, 4]

console.log(words, numbers)
console.log([])
console.log(['Sviat', 28, true]) // true

const numbers2 = new Array(1, 3, 1, 5, 2, 1, 4);
const numbers3 = Array(1, 3, 1, 5, 2, 1, 4);

console.log(numbers2, numbers3)

const userName = "Sviat"
console.log(
     userName.split(''),
     [...userName],
     Array.from(userName),
)

