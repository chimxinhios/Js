// async function load(){
//     const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
//     const data = await conn.json();
//     //console.log(result);
//     console.log (data);
// }
// load();

//  function generateId () {
//      const x = Math.random();
//      const y  = x.toString(36);
//      const z = y.substr(2,9);
//      return z;
//  }
//  const myId = generateId;
//  console.log(myId);

// bài 4.
// random = function(){
//     return Math.floor(Math.random() * 11);
    
// };
// const x = random();
// if (x < 0) {
// console.log('Failed: the number is smaller than 0');
// } else if (x > 10) {
// console.log('Failed: the number is bigger than 10');
// } else {
// console.log('Passed , bravo');
// }
// Bài 5 .
//  rand2 = function(min, max) {
     
//      return Math.floor(Math.random() * (max+1- min) + min);
    
//  };


// const x = rand2(4, 16);
// if (x < 4) {
// console.log('Failed: the number is smaller than 4');
// } else if (x > 16) {
// console.log('Failed: the number is bigger than 16');
// } else {
// console.log( 'Passed, bravo');
// }
// bài 6 .
// function cal(x1, y1, x2, y2){
//     let result = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))
//     return result;
// }
// const x = cal(3, 10, 0, 6);
// console.log(x);
// if (x !== 5) {
// console.log('Failed: the calculation is wrong');
// } else {
// console.log('Passed, bravo');
// }
