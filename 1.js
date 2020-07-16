// var output = $('h1');
// var isPaused = false;
// var time = 0;
// var t = window.setInterval(function() {
//   if(!isPaused) {
//     time++;
//     output.text("Seconds: " + time);
//   }
// }, 1000);

// //with jquery
// $('.pause').on('click', function(e) {
//   e.preventDefault();
//   isPaused = true;
// });

// $('.play').on('click', function(e) {
//   e.preventDefault();
//   isPaused = false;
// });
let a = [1,2,3,2];
let b = a.find(function(number){
    if(number == 2){
        console.log("ok");
    }
});
console.log(b);
let c = [];
for(let i of a){
if(i % 2==0){
    c.push(i);
    console.log(c);
}
}