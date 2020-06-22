// // Câu 1 :
// 1. Trong Javascript:
// - var là kiểu khai báo biến mặc định từ xưa và hiện đã lỗi thời và được thay thế bởi let .
// - const khai báo một hằng số không thể thay đổi giá trị.

// 2.
//     - let tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó, khác với var - tạo ra một biến có phạm vi truy cập xuyên suốt function chứa nó.

// 3.
//  - let tạo ra một biến có thể thay đổi giá trị, khác với const - tạo ra một hằng số không thể thay đổi giá trị.

//  4.
//   - Hiện nay trong hầu hết các trường hợp, chúng ta dùng let thay cho var vì tính đóng gói và dễ quản lí của nó.
//   - Khi cần tạo một hằng số không thể thay đổi giá trị, ta dùng const.

// Câu 2 :
//  - Boolean là kiểu dữ liệu luận lí logic.
//  - Boolean trả về 2 kết quả là true hoặc false .





// console.log("Câu 3 :") ;
// console.log("a.");

// for(let i = 0; i < 7 ; i++){
//     console.log(i);
// }

// console.log("b.");
//  let n = prompt("Enter a number :");
// for(let i = 0; i < n; i++){
//     console.log(i);
// }
// console.log("c.");
//  let n = prompt("Enter a number :");
// let i = 3;
// while(i<n){
//     console.log(i);
//     i++;
// }
// console.log("d.");
//  let c = prompt(" Vui lòng nhập điểm bắt đầu vòng lặp (c):");
//  let n = prompt("Enter a number :");
// while(c < n){
//     console.log(c);
//     c++;
// }
// console.log("e.");
//  let c = Number(prompt("Nhập lại C cho câu này : "));

// let n = Number(prompt("Nhập lại n cho câu này : "));

// while(c < n){
//     console.log(c);
//     c+=3;
// }
// console.log("f.");
// let c = Number(prompt("Nhập lại C cho câu này : "));

// let n = Number(prompt("Nhập lại n cho câu này : "));
// let s = Number(prompt("Nhập bước nhảy(s) : "));
// while(c < n){
//     console.log(c);
//     c+=s;
// }

//Câu 4 :
// let  n = prompt("Nhập lại N cho câu 4 :");
//  let fac = 1;
// for(let i = 1;i<=n; i++){
    
//  fac *= i;

// }
//  console.log(fac);

// Câu 5 :
// let age = prompt("How old are you ?");
// if(age<14)
// alert("Tắt máy học bài đi cháu !");
// else{
//     alert("Enjoy ")
// }
// Câu 6 :
// let x = prompt("Nhập X : ");
// if(x<(9/2)){
//     alert("Lower half of 9");
// }

// else if(x>(9/2)){
//     alert("higher half of 9");
// } else {
//     alert("Your number is equals half of 9 ");
// }


// Câu 7 :
// let x = prompt("x = ");
// let n = prompt("n = ");
// if(x<(n/2))
// alert(`Lower half of ${n}`);
// if(x>(n/2))
// alert(`higher half of ${n}`);

// Câu 8 :
// let x = prompt("x = ");
// if (x % 2 == 0)
//     alert(`${x} is an even number`);
// else {
//     alert(`${x} is an odd number`);
// }

// Câu 9 :
// a.
// let l = "L";
// let h = "H";

// for (let i = 1; i <= (6 / 2); i++) {
//     console.log(l);
// }
// for (let i = 1; i <= (6 / 2); i++) {
//     console.log(h);
// }
// b.
// let total = prompt("Nhập số tổng của L và H :");
// let tongl = (total / 2) + ((total % 2) / 2);
// for (let i = 1; i <= tongl; i++) {
//     console.log(l);
// }
// for(let i = 1 ; i <=(total/2);i++){
//     console.log(h);
// }
// c.
//  let x = 0;
//  let y = 1;
//  let i = 0;
//  while(i<4){
//      console.log(x);
//      console.log(y);
//      i++;
//  }
// d.
//  let n = prompt("Nhập N : ");
//  let i = 0;
//  while(i < n){
//      if(i%2==0){
//          console.log(0);
//      }else{
//          console.log(1);
//      }
//      i++;
//  }

// Câu 10 :

// let weight = prompt("Nhập cân nặng(kg) : ");
// let height = prompt("Nhập chiều cao(m) :");
// let bmi = (weight/(height*height));
// if(bmi<16){
//     alert("you bmi is " + bmi);
//     alert(" You are Severely underweight");
// } else if(16 <= bmi < 18.5){
//     alert("you bmi is " + bmi);
//     alert("You are Underweight");
// }else if (18.5 <= bmi < 25){
//     alert("you bmi is " + bmi);
//     alert("You are Normal");
// }else if (25 <= bmi < 30){
//     alert("you bmi is " + bmi);
//     alert("You are Overweight");
// }else {
//     alert("you bmi is " + bmi);
//     alert("You are Obese");
// }

// Câu 11 :

// a.
// for (let i = 0; i < 4; i++) {
//     fd(100);
//     rt(90);
// }

// //b.
// for (let i = 0; i < 3; i++) {
//     fd(100);
//     rt(120);
// }


// c.
// for (let i = 0; i < 5; i++) {
//     fd(100);
//     rt(72);
// }


// d.
// for (let i = 0; i < 6; i++) {
//     fd(100);
//     rt(60);
// }


// Câu 12 : 

// let canh = prompt("Nhập số cạnh :");

// let a = 360/canh;
// console.log(a);
// if(canh > 359 ){
//     for(let i = 0; i < canh; i++){
//         fd(1);
//         rt(a);
//     }
// } else {
//     for(let i = 0; i < canh; i++){
//         fd(100);
//         rt(a);
//     }
// }


// Câu 13 :

// let a = prompt("Nhập số hình muốn vẽ :");

// for(let i = 1 ;i<= a;i++){
//     let b = 360/(i+2);
//      for(let j = 0; j < (i+2); j++){
//      fd(100);
//      rt(b);

//      }
//      continue;
//     }
