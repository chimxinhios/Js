console.log("part 1(1) :");
console.log("Số ngẫu nhiên từ 0 - 1 : " + Math.random());

console.log("part 1(2) : ");
let arr = [2, 5, 6, 9, 10]
console.log("Số ngẫu nhiên trong mảng : " + arr[Math.floor(Math.random() * arr.length)]);

// console.log("part 1 (3 + 4) :");
// let a = [
//   {
//     title : 'Which fictional detective lived at 221b baker street ?',
//     m : 'Watson ',
//     h : 'Sam Spade ',
//     b : 'Scubidu ',
//     bo : 'Sherlock holmes ' 
//   },
//   {
//     title : 'What sweet food made by bees using nectar from flowers ? ',
//     m : 'Bread ',
//     h : 'Honey ',
//     b : 'Sugar ',
//     bo : 'Potent '
//   }
// ];

//  let rand = Math.floor(Math.random() * a.length) ;
//  //alert(a[rand]);
//  let user = prompt(
//    a[rand].title + "\n" + '1. '+
//    a[rand].m + '\n' + '2. '+
//    a[rand].h + '\n' + '3. '+
//    a[rand].b + '\n' + '4. '+
//    a[rand].bo 

//   );

//   if(rand == 0 && user == 1){
//     alert("Ok");
//   } else if(rand == 1 && user == 2){
//     alert("oki");
//   } else {
//     alert("ngu");
//   }
// console.log("part 1(5) :");
// let a = [
//   {
//     title : 'How many legs do an optopus has ?',
//     1 : '4 legs ',
//     2 : 'No legs ',
//     3 : '8 legs ',
//     4 : '2 legs ' 
//   },
//   {
//     title : 'Which country is home to the Kangaroo ? ',
//     1 : 'Australia ',
//     2 : 'Autria ',
//     3 : 'New Zealand ',
//     4 : 'US '
//   }
// ];

//  let rand = Math.floor(Math.random() * a.length) ;
//  //alert(a[rand]);
//  let user = prompt(
//    a[rand].title + "\n" + '1. '+
//    a[rand][1] + '\n' + '2. '+
//    a[rand][2] + '\n' + '3. '+
//    a[rand][3] + '\n' + '4. '+
//    a[rand][4] 

//   );

//   if(rand == 0 && user == 2 || rand == 1 && user == 1){
//     alert("Bravo ");
//   } else {
//     alert("ngu");
//   }
//console.log("part 1 (7-8) :");
// let a = [
//   {
//     title: 'Which fictional detective lived at 221b baker street ?',
//     1: 'Watson',
//     2: 'Sam Spade',
//     3: 'Scubidu',
//     4: 'Sherlock holmes'
//   },
//   {
//     title: 'What sweet food made by bees using nectar from flowers ? ',
//     1: 'Bread',
//     2: 'Honey',
//     3: 'Sugar',
//     4: 'Potent'
//   },
//   {
//     title: 'How many legs do an optopus has ?',
//     1: '4 legs',
//     2: 'No legs',
//     3: '8 legs',
//     4: '2 legs'
//   },
//   {
//     title: 'Which country is home to the Kangaroo ? ',
//     1: 'Australia',
//     2: 'Autria',
//     3: 'New Zealand',
//     4: 'US'
//   }
// ];
// let score = 0;
// for (let i = 0; i < 4; i++) {
//   let rand = Math.floor(Math.random() * a.length);

//   let user = prompt(
//     a[rand].title + "\n" + '1. ' +
//     a[rand][1] + '\n' + '2. ' +
//     a[rand][2] + '\n' + '3. ' +
//     a[rand][3] + '\n' + '4. ' +
//     a[rand][4]
//   );
//   if (user == 1) {
//     if (a[rand][1] == 'Watson') {
//       score += 1;
//     }

//   } else if (user == 2) {
//     if (a[rand][2] == 'Honey' && 'No legs') {
//       score += 1;
//     }
//   // } else if (user == 3) {
//   //   if (a[rand][3] == '8 legs') {
//   //     score += 1;
//   //   }
//   } else if (user == 4){
//     if (a[rand][4] == 'US') {
//       score += 1;
//     }
//   } 
//   alert(score);

//   a.splice(rand, 1);
// }
// alert("We are out of question ")
// alert("Bạn đúng " + score + " câu");

console.log("Part 2 y chang bài 15 hôm trước nên em không làm nữa ");