// console.log("Bài 1 : ");
// console.log("Ví dụ đổi giá trị của 2 biến :");
// console.log("VD 1 :");
// let a = 1;
// let b = 2;
// console.log("a = "+ a + " b = "+b);
// b = [a, a = b][0];
// console.log("Sau khi đổi : a = "+ a + " b = "+b);
// let c = 3;
// let d = 4;
// console.log("c = "+ c + " d = "+d);
// let temp = c;
// c = d;
// d = temp;
// console.log("Sau khi đổi : c = "+ c + " d = "+d);
// console.log(" Bài 2 :");

// const s = 'Hello beauty there';
// console.log("Chuỗi ban đầu : "+s);
// let a = s.split(" ");
// console.log(a);
// console.log("bài 3 :");
// const a = [4, 5, 7, -8];
// console.log(...a);
// console.log("Bài 4 :");
// let arr = ["Jeans", "T-Shirt", "Socks"];
// for(let i = 0; i <= arr.length*2; i++){


// let userwant = prompt("Hi there, welcome to shop admin panel, what do you want(C, R, U, D) :");

// if (userwant == "c") {
//     let additem = prompt("Enter the name of the new item : ")
//     arr.push(additem);
//     alert("Done ");
//     continue;
// } else if (userwant == "r") {
//     console.log(arr);
// } else if (userwant == "u") {
//   let updat = prompt("Enter the position you want to update ");
//   let upitem = prompt("Enter the new name ");
//   arr[updat] = upitem;
//   continue;

// } else if (userwant == "d") {
//     let del = prompt("Enter the position you want to delete ");
//     arr.splice(del,1);
//     continue;

// } else {
//     alert("This command is not supported");
// }
// }
// console.log("Bài 5 :");
// let arr = prompt("Enter a sequence of numbers,separated by commas,");
// let b = arr.split(",");

// let c = 0;
// for(let i = 0; i < b.length; i ++ ){
//  c+= Number(b[i]);
// }
// alert("The sum of them is "+c);

// console.log("Bài 6 :");
// let a = prompt("enter a sequence of numbers,separated by ','");
// let b = a.split(",");
// let c = b[0];
// for(let i = 0; i < b.length-1; i++){
//     if(c>b[i])
//     c = Math.min(b[i],b[i+1]);
// }
// alert("The smallest number is " + c);
// console.log("Bài 7 : ");
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let usernum = Number(prompt("Enter a number "));
// let c = arr.indexOf(usernum);

// if(c < 0){
//     alert(usernum + " is NOT found in my array ");
// } else {
//     alert(usernum + " is FOUND in my array at index "+ c);
// }

// console.log("Bài 8 :");
// console.log("8.1 :");

// let size = [5, 7, 300, 90,24, 50, 75];
// console.log("Hello, my name is Đoàn and here is my sheep sizes: \n" + size);

// console.log("8.2 : ");

// let max = Math.max(...size);
// console.log("Now my biggest sheep has size " + max + ", let's shave it ");

// console.log("8.3 : ");

// size[size.indexOf(max)] = 8;
// console.log("After shearing, here is my flock \n" + size);


// console.log("8.4 + 8.5 : ");

// for (let i = 1; i < 4; i++) {
    
//         size = size.map(function (index) {
//             return index + 50;
//         })
    
    
//     console.log("MONTH " + i + "\n One month has, passed, my sheeps have grown, here are their sizes \n" + size);
//     let max = Math.max(...size);
//     if(i<4-1){
//     console.log("Now my biggest sheep has size " + max + ", let's shave it ");
    
//         size[size.indexOf(max)] = 8;
    
    
//     console.log("After shearing, here is my flock \n" + size);
// }}

// console.log("8.6 :");

// let total = size.reduce(function(a,b){
//     return a + b;
// })
// console.log("My flock has sizes in total : " + total);
// console.log(`I would get ${total}  * 2$  = ${total*2}`);

// console.log("Bài 9 : ");

// const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
// let len = 25;
// for(let i = 1; i < colors.length; i++){
//     color(colors[i]);
    
//     for(let j = 0; j < 4;j++){
        
//         fd(len*i);
//         rt(90);
//     }
// } 
    



// console.log("Bài 10 :");

// let arr = prompt("Enter a sequence of names :");
// let b = arr.split(",");
// let c = b ;
// for(let i = 0; i < b.length; i++){
//     c[i] = ("<"+ b[i] + ">");
// }

// alert(arr + "=>" + c);

// console.log("Bài 11 : ");

// let arr = prompt("Enter a sequence number ");
// let b = arr.split(",");

// let le = b.filter(function(number){
//     return number % 2 == 1;
// })
// console.log("The odd Numbers of the entered sequence is : " + le);
