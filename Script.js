'use strict';
// Boolean is a true/false value
// Let dogsAreCool = true;
// use Let not Var

// const firstName = 'Austin';
// const job = 'Learning student';
// const birthYear = '1995';
// const year = 2023;

// const austin = "I'm " + firstName + ", a " + (year - birthYear)
//  + ' year old ' + job + "!";

// console.log(austin);

// const austinNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(austinNew);



// const age = 11;
// const isOldEnough = age >= 18;
// const yearsLeft = 18 - age

// if (isOldEnough){
//     console.log(`Yes, you can drive!`)
// }   else {
//     console.log(`Sorry you cannot drive! You have to wait ${yearsLeft} more years.`)
// }


// const fav = Number(prompt("How many butts do you have?"));

// if (fav === 3){
//     console.log(`cool beans bro`);
// }


// const scoreDolphins = (96 + 108 + 89) / 3
// console.log (scoreDolphins + " Dolphins")
// const scoreKoalas = (88 + 91 + 110) / 3  
// console.log (scoreKoalas + " Koalas")
// let minimumScore = 100


// if (scoreKoalas > scoreDolphins){
//     console.log(`Koalas win the trophy`);}       
//          else if (scoreDolphins > scoreKoalas){
//          console.log(`Dolphins win the trophy`);}           
//             else {console.log("Both win the trophy");}

// const scoreDolphins = (97 + 112 + 101) / 3
// console.log (scoreDolphins + " Dolphins")
// const scoreKoalas = (109 + 95 + 123) / 3  
// console.log (scoreKoalas + " Koalas")
// let minimumScore = 100


// if ((scoreKoalas > scoreDolphins)&&(scoreKoalas >= minimumScore)){
//     console.log(`Koalas win the trophy`);}       
//          else if ((scoreDolphins > scoreKoalas)&&(scoreDolphins >= minimumScore)){
//          console.log(`Dolphins win the trophy`);}           
//            else if((scoreDolphins===scoreKoalas) &&(scoreDolphins >= minimumScore)){
//             console.log("Both win!");
//            }
            
//          else {console.log("No One Wins");}

// const scoreDolphins = (97 + 112 + 111) / 3
// console.log (scoreDolphins + " Dolphins")
// const scoreKoalas = (97 + 112 + 111) / 3  
// console.log (scoreKoalas + " Koalas")
// let minimumScore = 100


// if (scoreKoalas > scoreDolphins && scoreKoalas >= minimumScore){
//     console.log(`Koalas win the trophy`);}       
//          else if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore){
//          console.log(`Dolphins win the trophy`);}           
//            else if(scoreDolphins===scoreKoalas && scoreDolphins >= minimumScore){
//             console.log("Tie!");}
//                 else {console.log("No One Wins");}
                    







// const day = 'monday';

// switch(day) {
// case 'monday':  // day === 'monday'
//          console.log("Plan course structure");
//          console.log("Go to coding Meeting");
//     break;
// case 'tueday':
//          console.log("Plan course structure");
//     break;
// case 'wednesday':
// case 'thursday':
//             console.log("Write Code");
//     break;
// case 'friday':
//           console.log(" Film videos ");
//     break;
// case 'saturday':
// case 'sunday':
//         console.log(" Enjoy the weekend  ");
//      break;
//      default:
//         console.log("not a valid day!")
//     } 

// --------------------------------------------------------------------------------------

// let day = "monday"

// if (day === 'monday'){
//     console.log("It's monday");
// }  
// else if (day === 'tuesday'){
//     console.log("It is tuesday");
// }  
// else if (day === 'wednesday' || day === 'thursday' ){
//     console.log("it is wednesday or thursday");
// }  
// else if (day === 'friday'){
//     console.log("it is friday");
// }  
// else if (day === 'saturday' || day === 'sunday'){
//     console.log("sat or sunday");
// } else {
//     console.log("something is broken")
// };
 


// /////////////////////////////////////////////////////////////////////////////////////////

// Conditional operator
// const age = 21
// age >= 21 ? console.log("Over 21") : console.log("under 21")

// const drink = age >=21 ? 'Alcohol' : 'water'
// console.log(drink)

// ///////////////////// Template Literal `blah blah ${}`
// console.log(`I like to drink ${age>=21 ? 'Alcohol' : 'Water'}`)


// Ternary operator is ?  and : 
// Operators are things like + = / * > ===  && || ! 
// Expressions are things that produce a value, yields a result


//    0.15 or .20

// const bill = 275;
// const tip = bill >=50 && bill <=300 ? bill * 0.15 : bill * .20
// const total = bill + tip
// console.log(tip)

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill+tip}`)

// let hasDriversLicense = false;
// const passTest = true;

//  if (passTest) hasDsriversLicense = true;
//  if (hasDriversLicense) console.log("I can drive")






// function logger(){
//     console.log("My butt hurts")
// }

// // Call / running / invoking function
// logger();





// function fruitProcessor(apples, oranges){
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
// return juice;
// }

// //         Arguments 5,0
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(2,6);
// console.log(orangeJuice);


// const buttJuice = fruitProcessor(4,6);
// console.log(buttJuice);

// const bootyJuice = fruitProcessor(1,4);

// console.log(bootyJuice)

// dry means dont repeat your code, Functions helps with this
// Console.log is a function built in


////////////// Function Declaration
// function calcAge1(birthYear){
//     return 2023 - birthYear;
// }
// const age1 = calcAge1(1995);


// //////////////// Function declaration can be called before the code, expression has to be called after

// //////////////// Function Expression - to express value to store in a variable
//  const calcAge2 = function (birthYear){
//     return 2023 - birthYear;
//  }

// const age2 = calcAge2(1984)

//  console.log(age1, age2)



// ////////////////// Arrow Function

// const calcAge3 = birthYear => 2023 - birthYear;

// var age3 = calcAge3(1995);
// console.log(age3, "butts");



// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age
//     // return retirement
// return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1995, 'Austin'));
// console.log(yearsUntilRetirement(1984, 'Kelly'));


// function fruitSlicer(fruit){
//      fruit = fruit * 4
//      return fruit
// };


// function fruitProcessor(apples, oranges){
//     let applePieces = fruitSlicer(apples);
//     let orangePieces = fruitSlicer(oranges);

//     const juice = `juice with ${applePieces} apple slices and ${orangePieces} orange slices.`;
// return juice;
// }

// console.log(fruitProcessor(2,3))


// const calcAge = function(birthYear){
//     return 2023 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age
    
//     if (retirement > 0){
//         console.log(`${firstName} will retire in ${retirement} years!`);
//         console.log(retirement);
//     } else{
//         console.log(`${firstName} has already retired!`);
//         console.log(retirement);
//     }
    
    
// }
// yearsUntilRetirement(1995, 'Austin');
// yearsUntilRetirement(1984, 'Kelly');

// awdawd
let userInput = prompt("Who is the best wow player?");
// the id of H1 is userPromt
let h1Display = document.getElementById("userPrompt");
h1Display.textContent = userInput;
const lowercaseInput = userInput.trim().toLowerCase();


if (lowercaseInput === "danny" || lowercaseInput === "deminison" || lowercaseInput === "jullend" || 
lowercaseInput === "unreals" || lowercaseInput === "idotwo" || lowercaseInput === "imsobadimpro" || 
lowercaseInput === "rockslam" || lowercaseInput === "maxedout" || lowercaseInput === "meatpack" ||
lowercaseInput === "biglazy" ) {
    const capitalizedInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
   h1Display.textContent = `Yeah right, ${capitalizedInput} sucks! Moomoothecow beats him all the time!`;
  } else if (userInput === "moomoothecow" || userInput === "steelice" || userInput === "steel ice" 
  || userInput === "austin" || userInput === "dragonice" || userInput === "catscratch" || userInput === "mastacasta" 
  || userInput === "redpaladin" ) {
    h1Display.textContent = "You're god damn right!";
  } 
  else if (userInput === "me" ) {
    h1Display.textContent = "No, obviously not you. It's probably Moomoothecow";
  } 
  else if (userInput === "leilune" || userInput === "plei" || userInput === "kelly" 
  || userInput === "lampalune" || userInput === "leilelly" || userInput === "lells" || userInput === "lels" 
  || userInput === "the lels" || userInput === "the lells" || userInput === "maowmaow") {
    const capitalizedInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    h1Display.textContent = `Yeah, ${capitalizedInput}'s pretty good but not as good as Moomoothecow.`;
  } else {
    const capitalizedInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    h1Display.textContent = `No one's even heard of "${capitalizedInput}", Obviously Moomoothecow is way better.`;
  }






















