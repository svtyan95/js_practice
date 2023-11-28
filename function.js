
//function area 
function calculateArea(a, b) {
     let area = a * b;
     
     console.log(area)
}
//тут я передав значання функції які зможуть обчислювати функію вижче
calculateArea(979, 2)
calculateArea(12, 11)




//great function user
function greeUser(name, partOfTheDay) { 
     let message = `Good ${partOfTheDay}, ${name}!`

     console.log(message)
}

greeUser('John', 'Morning')
greeUser('Bob', 'Aftrenoon')
greeUser('Elice', 'Evening')



//return
function calculateArea(a, b) {
     let area = a * b;
     
     return area;
}

let totalArea = 100 * calculateArea(4, 10) + 10 * calculateArea(2, 3);


console.log(totalArea)


//nuances of function 
function getArea(length = 100, width = 200) {
     
     return length * width;
 }

let totalAreaSum = getArea();

console.log(totalAreaSum)