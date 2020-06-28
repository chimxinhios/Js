// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
// };


// console.log("Bài 1 :");
// console.log("1.1 : ");
// console.log(" X nhận được đặc tính, tính chất(property) ");

// console.log("1.2 :");
// for (let x in product) {
//     console.log(x + ' : ' + product[x]);
// }

// console.log("Bài 2 : ");

// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
//     };

// let { subject , dueDate , assignTo} = task ;
// console.log(subject + '\n');
// console.log(dueDate + '\n');
// console.log(assignTo + '\n');

console.log("Bài 3 : ");
console.log("3.1 :");
console.log(" Kiểu dữ liệu ngoài cùng : object ");
console.log("3.2");
console.log(" Hits là một mảng ");
console.log("3.3 :");



// console.log("Bài 4 : ");

// let b4 = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for ‘error’',
//     pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//     uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
// };
// console.log("4.1 :");
// alert("Hi there, this is dev dictiornary ");
// let userwant = prompt("Enter a keyword ");
// if(b4[userwant]){
//     alert(userwant + '\n' + b4[userwant]);
// } else {
//     alert("We could not find your word : " + userwant);
// }
// console.log("4.2 :");
// alert("Hi there, this is dev dictiornary ");
// let i = 0;

// while (i < 2) {
//     let userwant = prompt("Enter a keyword ");
//     if (b4[userwant]) {
//         alert(userwant + '\n' + b4[userwant]);

//     }
//     else {
//         let updat = prompt("We could not find your word : " + userwant + ", leave your explanation ");
//         b4[userwant] = updat;
//         alert("done");
//     }
//     i++;
// }

console.log("Bài 5 :");

let products = [
    xiaomi = {
        Name: 'Xiaomi portable charger 20000mah',
        Brand: 'Xiaomi',
        Price: 428,
        Color: 'White',
        Category: 'Charger'
    },
    vsmart = {
        Name: 'VSmart Active 1',
        Brand: 'VSmart',
        Price: 5487,
        Color: ' Black',
        Category: 'Phone'
    },
    iphone = {
        Name: 'IPhone X',
        Brand: 'Apple',
        Price: 21490,
        Color: 'Gray',
        Category: 'Phone'
    },
    samsung = {
        Name: 'Samsung Galaxy A9',
        Brand: 'Samsung',
        Price: 8490,
        Color: 'Blue',
        Category: 'Phone'

    }
];
// for (let i in products) {
//     console.log("--------------")
//     console.log("Name : " + products[i].Name);
//     console.log("Price : " + products[i].Price);
// }
// console.log("5.2 :");
// let userw = Number(prompt("Enter a product position "));
// console.log(products[userw + 1]);

// console.log("5.3 :");
// let userwa = prompt("Enter your category? ");
// let userwab = userwa.toLowerCase();
// for (let i in products) {

//     if (products[i].Category.toLowerCase() == userwab) {
//         console.log("Name : " + products[i].Name);
//         console.log("Price : " + products[i].Price);
//     }

// }
// console.log("5.4 : ");

products[0].Providers = 'Phukienzero Dientuccc';
products[1].Providers = 'Tgdd Ddghn VhStore';
products[2].Providers = 'Tgdd';
products[3].Providers = 'Tgdd';

// for (let i in products) {
//     console.log("--------------")
//     console.log("Name : " + products[i].Name);
//     console.log("Price : " + products[i].Price);
//     console.log("Providers : " + products[i].Providers);
// };

// console.log("5.5 :");
// let userwan = prompt("Enter provider ");
// let userwanb = userwan.toLowerCase();
// for (let i in products) {


//     if (products[i].Providers.toLowerCase().includes(userwanb)) {
//         console.log("Name : " + products[i].Name);
//         console.log("Price : " + products[i].Price);
//         console.log("Providers : " + products[i].Providers);
//     }

// }

// console.log("Bài 6 :");

// console.log("Hi there, this is your learning tasks to front-end developer career : ");
// let a = [

// ]
// console.log("Bài 7 :");
// let pos = {
//     x: 200,
//     y: 50,
// }
// penup();
// rt(90);
// fd(pos.x);
// lt(90);
// fd(pos.y);

// console.log("Bài 8 :");

// const square = {
//     x: 100,
//     y: 50,
//     width: 20,
// };
// penup();
// rt(90);
// fd(square.x);
// lt(90);
// fd(square.y);
// pendown();
// for (let i = 0; i < 4; i++) {
//     fd(square.width);
//     rt(90);
// }

// console.log("Bài 9 :");

// const rect = {
//     x: 100,
//     y: 50,
//     width: 20,
//     height: 40,
// };

// penup();
// rt(90);
// fd(rect.x);
// lt(90);
// fd(rect.y);
// pendown();
// for (let i = 0; i < 2; i++) {
//     fd(rect.height);
//     rt(90);
//     fd(rect.width);
//     rt(90);
// }
// console.log("Bài 10 :");
// const cmds = [
//     {
//         shape: 'square',
//         x: 20,
//         y: 40,
//         width: 50,
//     },
//     {
//         shape: 'rect',
//         x: 8,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 70,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 10,
//         y: 20,
//         width: 70,
//         height: 20,
//     },
//     {
//         shape: 'square',
//         x: 25,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 33,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 50,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 58,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 40,
//         y: 25,
//         width: 8,
//     },
//     {
//         shape: 'square',
//         penWidth: 1,
//         x: 500,
//         y: 500,
//         width: 15,
//     },
// ];

// for (let i = 0; i < cmds.length; i++) {
//     if (cmds[i].shape == 'rect') {
//         console.log('ok');
//         penup();
//         rt(90);
//         fd(cmds[i].x);
//         lt(90);
//         fd(cmds[i].y);
//         pendown();
//         for (let j = 0; j < 2; j++) {
//             fd(cmds[i].height);
//             rt(90);
//             fd(cmds[i].width);
//             rt(90);
//         } home();
//     } else {
//         penup();
//         rt(90);
//         fd(cmds[i].x);
//         lt(90);
//         fd(cmds[i].y);
//         pendown();
//         for (let j = 0; j < 4; j++) {
//             fd(cmds[i].width);
//             rt(90);
//         }
//         home();
//     }
// }


// console.log("Bài 11 :");
// const circle = {
//     shape: 'circle',
//     x: 100,
//     y: 50,
//     radius: 30,
//     };

// penup();
// rt(90);
// fd(circle.x);
// lt(90);
// fd(circle.y);
// pendown();
//  fd(circle.radius);
// for (let i = 0; i < 360; i++) {
//     rt(1);
//     fd(1);
// }

