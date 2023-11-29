// let age = 25;

// if (age >= 18) { 
//      console.log('Hello!');

// }


// function greetIfAdult(age, isPresent = true) {

//      if (age >= 18) {
          
//           if(isPresent){
//           console.log('Hello!')
//           }
//      }
// }

// greetIfAdult(18, false);



//operator де дві умови мусять спрацювати але не одна  
// function greetIfAdult(age, isPresent = true) {

//      if (age >= 18 && isPresent) {
//      console.log('Hello!')}
// }

// greetIfAdult(18, true);


//else
// function greet(age) {

//      if (age >= 18) {
//           console.log('Hello!')
//      } else { 
//           console.log('Hi!')
//      }

//      // if (age < 18) { 
//      //      console.log('Hi!')
//      // }
// }

// greet(15)





// else if 
// function greet(age) {

//      if (age >= 18) {
//           console.log('Hello!')
//      } else if (age > 7) { 
//           console.log('Hi!')
//      } else if (age > 3){
//           console.log('Hi kid!')
//      } else {
//           console.log('Hi toddler!')
//      }
// }

// greet(25)


//working with return 
function getGreeting(age) {

     if (age >= 18) {
          return 'Hello!';
     }
     
     if (age > 7) { 
          return 'Hi!' 
     }
     
     if (age > 3) {
          return 'Hi kid!'
     }
          return 'Hi toddler!' 
}
let greeting = getGreeting()

console.log(greeting)