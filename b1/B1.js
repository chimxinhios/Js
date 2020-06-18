// Câu 1 :
//  1.1 :
//   - Những trường hợp đặt tên biến sẽ sinh ra lỗi: 
//    - Tên biến bắt đầu bằng số.

//    - Tên biến chứa những ký tự đặc biệt (khoảng trắng cũng tính là ký tự đặc biệt), ngoại trừ "_" và "$".
  
//    - Tên biến trùng với các từ khóa (keywords) của javascript.

//    VD : 0Doan, *doan, if...
// 1.2 : 
//  - Dùng từ khóa typeof đặt trước biến để kiểm tra kiểu dữ liệu của biến.

//  Câu 2 :
//  - 1 - b+c, 2 - a, 3 - e, 4 - c.

//  Câu 3 : 

let message = 'Coding is great';
console.log(message);

let studentCount = 0;
console.log(studentCount);

// Câu 4 :
message ='Coding might not be easy, but still great';
console.log(message);
studentCount = 16;
console.log(studentCount);
let m = message.toLowerCase()
console.log(m);
studentCount += 1;
console.log(studentCount);

//Câu 5 : 
alert("Người  đọc được dòng chữ này rất đẹp trai, xinh gái ");

//Câu 6 : 
let a6 = prompt(" What your name ? ");
alert(a6 + " - Một cái tên đẹp.");
// Câu 7 : 
let a7 = prompt(" Enter your first name : ");
let b7 = prompt(" Enter your last name : ");
alert(" hi "+ b7+ " " + a7);

//Câu 8 : 

let a8 = prompt( " Nhập độ dài cạnh hình vuông : ");
 a8 = a8* a8;
alert(" Diện tích hình vuông : "+ a8);

//Câu 9 :
let a9 = prompt(" Nhập bán kính hình tròn : ");
let s = (a9 * a9) * 3.14 ;
alert(s);