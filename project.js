check = function() {
    const ider = document.getElementById("id").value;
    const passw = document.getElementById("pass").value;
    if(ider == "admin" && passw == "1234"){
    
    document.getElementById("content").style.display = 'block';
    } else {
        document.getElementById("content").style.display = 'none';
    }
    
};
function start(){
    let cauhoi = [
        {
        title:'bac ho ten that la gi : ',
        0:'cung',
        1:'a',
        2:'b',
        3:'c',
        true:'cung'
    },
    {
        title:'bac sinh nam nao?',
        0:1890,
        1:1900,
        2:1901,
        3:1001,
        true:1890
    },
    {
        title:'1 + 1 = ?',
        0:1,
        1:2,
        2:3,
        3:4,
        true:2
    }
    ];
    document.getElementById("cauhoi").innerHTML = cauhoi[0].title;
    document.getElementById("trl1").value = cauhoi[0][0];
    document.getElementById("trl2").value = cauhoi[0][1];
    document.getElementById("trl3").value = cauhoi[0][2];
    document.getElementById("trl4").value = cauhoi[0][3];
    let i = 1;
    let score = 0;
 doquizz = setInterval(function() {
    if(i == cauhoi.length){
        alert("end");
        //console.log("i :" + i);
            clearInterval(doquizz   );
            
         alert("Your score : " + score);
     }
     
    document.getElementById("cauhoi").innerHTML = cauhoi[i].title;
    document.getElementById("trl1").value = cauhoi[i][0];
    document.getElementById("trl2").value = cauhoi[i][1];
    document.getElementById("trl3").value = cauhoi[i][2];
    document.getElementById("trl4").value = cauhoi[i][3];
    i++;
    
 },3000);
 kqtrue = function(trl) {
   let a = trl; 
    for(let j in cauhoi){
        if(a == cauhoi[j].true){
            score++;
            document.getElementById("kqua").innerHTML = 'dung';
            document.getElementById("diem").innerHTML = score;
        } else {
            document.getElementById("kqua").innerHTML = 'ngu'; 
        }
    }

    //alert(cauhoi[i-1].true);
    //let a = document.getElementById("trl1").value;
 //alert(a);
 }
 kq = function() {

    score++;
    console.log(score);
    }
//  if(i== cauhoi.length-1){
//     alert("end");
//         clearInterval(doquizz);
     
//  }
//     document.getElementById("cauhoi").innerHTML = cauhoi[0].title;
//     document.getElementById("trl1").value = cauhoi[0][0];
//     document.getElementById("trl2").value = cauhoi[0][1];
//     document.getElementById("trl3").value = cauhoi[0][2];
//     document.getElementById("trl4").value = cauhoi[0][3];
//     document.getElementById("cauhoi2").innerHTML = cauhoi[1].title;
//     document.getElementById("trl5").value = cauhoi[1][0];
//     document.getElementById("trl6").value = cauhoi[1][1];
//     document.getElementById("trl7").value = cauhoi[1][2];
//     document.getElementById("trl8").value = cauhoi[1][3];
}

creat = function() {
    
}

