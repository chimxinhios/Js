
let c = document.getElementById("value");
let a = c.value;
function cong() {
   a++;
   document.getElementById("value").value = a;
}
function tru() {
   a--;
   document.getElementById("value").value = a;
}

function start (){

   let d = document.getElementById("input").value;
   timeout = setInterval(function(){
   
    document.getElementById("out").innerHTML = d;
      d--;
      timeout();
   }, 1000);
  
}
stop = function() {
   clearInterval(timeout);
}
function load(){
   let arrquote = ['a', 'b','c'];
   let rand = Math.floor(Math.random() * arrquote.length) ;
   document.getElementById("quote").innerHTML = arrquote[rand] ;
}



