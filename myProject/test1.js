
let data = [
    {
        question: "What causes ocean tides?",
        correctAnswer: "The pull of gravity from the Moon and the Sun",
        wrongAnswers: [
            "The pull of gravity from the Sun",
            "The pull of gravity from the Moon",
            "The Earth spin around its axis",
        ],
        hint: "Not only one cause",
    },
    {
        question: "What is the biggest animal that ever lived?",
        correctAnswer: "Blue whale",
        wrongAnswers: [
            "King Kong",
            "Tyrannosaurus rex",
            "Sperm whale",
        ],
        hint: "Fish",
    },
    {
        question: "What is culture?",
        correctAnswer: "The features of everyday life shared by a group",
        wrongAnswers: [
            "A person's individual traits",
            "Something different that one person does in their daily life",
            "Having respect and acceptance for people different than you",
        ],
        hint: "Stem from more than one person",
    }
    // {
    //     question: "Who sets the standards that create a culture?",
    //     correctAnswer: "All People",
    //     wrongAnswers: [
    //         "Family Elders",
    //         "Artists",
    //         "Governments",
    //     ],
    //     hint: "Something that is normal",
    // },
    // {
    //     question: "Which is not a danger to explorers searching for the lost city?",
    //     correctAnswer: "Rabid monkeys",
    //     wrongAnswers: [
    //         "Deadly snakes",
    //         "Hungry jaguars",
    //         "Poisonous insects",
    //     ],
    //     hint: "Animal that contains non-contagious disease",
    // },
    // {
    //     question: "What is a property that leads to electromagnetic interactions between particles of matter?",
    //     correctAnswer: "Electric charge",
    //     wrongAnswers: [
    //         "Static electricity",
    //         "Electric conduction",
    //         "Semi-conduction",
    //     ],
    //     hint: "Intake of electricity",
    // },
    // {
    //     question: "Which of the following is not an element of which color is composed?",
    //     correctAnswer: "Detail (definition)",
    //     wrongAnswers: [
    //         "Value (hue)",
    //         "Intensity (saturation)",
    //         "Tonality (luminance)",
    //     ],
    //     hint: "HSL",
    // },
    // {
    //     question: "What is the measurement of Earth's gravity?",
    //     correctAnswer: "9.8 m/s2",
    //     wrongAnswers: [
    //         "8.2 m/s2",
    //         "6.9 m/s2",
    //         "3.5 m/s2",
    //     ],
    //     hint: "Can be rounded up to 10 m/s2",
    // },
    // {
    //     question: "BarmBrack, a fruitcake, is a Halloween Irish tradition. This cake contains:",
    //     correctAnswer: "Objects baked into the bread used as a fortune-telling game",
    //     wrongAnswers: [
    //         "Special powers that will make you see ghosts",
    //         "Chili and different spices",
    //         "Meat",
    //     ],
    //     hint: "Something for prophecy",
    // },
    // {
    //     question: "Which of the following is NOT a major component of Cell Theory?",
    //     correctAnswer: "All organisms contain eukaryotic cells",
    //     wrongAnswers: [
    //         "All organisms are made of 1 or more cells",
    //         "The cell is the basic unit of life",
    //         "All cells come from pre-existing cells",
    //     ],
    //     hint: "Not the fundamental root of an organism",
    // }
];
let math = [
    {
        question: "1 + 1 = ?",
        correctAnswer: "2",
        wrongAnswers: [
            "3",
            "4",
            "5",
        ],
    },
    {
        question: "1 x 12 = ?",
        correctAnswer: "12",
        wrongAnswers: [
            "30",
            "40",
            "50",
        ],
    },
    {
        question: "11 x 12 = ?",
        correctAnswer: "132",
        wrongAnswers: [
            "69",
            "145",
            "213",
        ],
    },
    {
        question: "99 - 72 = ?",
        correctAnswer: "27",
        wrongAnswers: [
            "34",
            "49",
            "52",
        ],
    },
    {
        question: "3 x 2 = ?",
        correctAnswer: "6",
        wrongAnswers: [
            "9",
            "10",
            "5",
        ],
    },
    {
        question: "0 / 1 = ?",
        correctAnswer: "0",
        wrongAnswers: [
            "1",
            "100",
            "10",
        ],
    },
    {
        question: "99 / 3 = ?",
        correctAnswer: "33",
        wrongAnswers: [
            "66",
            "49",
            "11",
        ],
    },
    {
        question: "3! = ?",
        correctAnswer: "6",
        wrongAnswers: [
            "7",
            "9",
            "10",
        ],
    },
    {
        question: "9 ^ 2 = ?",
        correctAnswer: "81",
        wrongAnswers: [
            "67",
            "63",
            "72",
        ],
    },
    {
        question: "sin(0) = ?",
        correctAnswer: "0",
        wrongAnswers: [
            "1",
            "0.3",
            "0.6",
        ],
    },
];

logout = function() {
    i = 0;
    score = 0;
    userscore = 0;
    reGame();
}
reGame = function () {
    document.getElementById("chude").style.display = 'block';
    document.getElementById("reStart").style.display = 'none';
    document.getElementById("formGame").style.display = 'none';
}
let i = 0;
var out = false;
let userscore = 0;

start = function (chudeinput) {
    if (out == false){
    document.getElementById("chude").style.display = 'none';
    document.getElementById("formGame").style.display = 'block';

    let score = 0;
   
    var chuDe = chudeinput;
    let c = [];
    run = function () {

        c.push(chuDe[i].wrongAnswers[0]);
        c.push(chuDe[i].wrongAnswers[1]);
        c.push(chuDe[i].wrongAnswers[2]);
        c.push(chuDe[i].correctAnswer);
       
        document.getElementById("cauHoi").innerHTML = chuDe[i].question;
        document.getElementById("score").innerHTML = "Diem hien tai cua ban : " + score;
        for (let i1 = 1; i1 < 5; i1++) {
            rand = Math.floor(Math.random() * c.length);
            document.getElementById('c' + i1).value = c[rand];
            document.getElementById("c" + i1).style.background = 'rgb(64, 204, 8)';
            c.splice(rand, 1);
        };
    }
    
    run();
    check = function (valuec, idtab) {
        let kq = valuec;
        let idthe = 'c' + idtab;
        let idtrue = 'c';
        
        for (let j in chuDe) {
            if (kq == chuDe[j].correctAnswer) {
                score++;

                xanh = setTimeout(() => {
                    document.getElementById("thongBaoKq").innerHTML = 'dung';
                    if (document.getElementById(idthe).value == chuDe[j].correctAnswer) {
                        document.getElementById(idthe).style.background = "green";

                    }
                }, 500);

            } else {
                vang = setTimeout(() => {
                    document.getElementById("thongBaoKq").innerHTML = 'sai';
                    for (let i4 = 1; i4 < 5; i4++) {
                        if (document.getElementById(idtrue + i4).value == chuDe[j].correctAnswer) {
                            document.getElementById(idtrue + i4).style.background = 'yellow';
                        }
                    }
                }, 499);

            }
        }
        let endGame = setTimeout(() => {
            if (i == chuDe.length) {
                console.log("end");
                document.getElementById("formGame").style.display = 'none';
                document.getElementById("reStart").style.display = 'block';
                stop();
                clearTimeout(reRun);
            }
        }, 800);

        toMau(idthe);
        i++;
        reRun = setTimeout(run, 1000);

    }

    stop = function () {
        userscore += score;
        document.getElementById("score").innerHTML = "Diem cua ban la : " + userscore;
        i = 0;
 
    }
    toMau = function (kq) {
        document.getElementById(kq).style.background = "red";
        a = setTimeout(() => {
            document.getElementById(kq).style.background = "white";
        }, 1000);
    }

    doihint = () => {
        document.getElementById("score").innerHTML = "Diem cua ban la : " + userscore;
        console.log(score + ' ' + userscore);
        if (chuDe[i].hint) {
            if (score > 0) {
                alert(chuDe[i].hint);
                score -= 0.5;

            } else if (score < 0.5 && userscore < 0.5) {
                alert("ban khong du diem ");
            }
            else if (userscore > 0) {
                alert(chuDe[i].hint);
                score -= 0.5;
            }
        } else {
            alert("not hint");
        }


    };
    trogiup = function () {
        score -= 0.5;
        console.log(score);
        let cc = 'c';


        let arr = [];
        for (let i3 = 1; i3 < 5; i3++) {
            //let rand = Math.ceil(Math.random()*4);
            if (document.getElementById(cc + i3).value == chuDe[i].correctAnswer) {
                arr.push(i3);
                for (let i4 = 1; i4 < 5; i4++) {
                    let rand = Math.ceil(Math.random() * 4);
                    if (rand != i3) {
                        arr.push(rand);
                        break;
                    }
                }

            }
        } console.log(arr);
        for (let i5 = 1; i5 < 5; i5++) {
            if (i5 != arr[0] && i5 != arr[1]) {
                document.getElementById(cc + i5).value = "";
            }
        }
    }

};
quay = function () {
    document.getElementById("inscore").style.display = 'block';
    document.getElementById("quay").style.display = 'block';
    let diemcuoc = document.getElementById("inscore").value;
    console.log(diemcuoc);
}
quayso = function () {
    let diemdoi = document.getElementById("inscore").value;
    let ran = Math.floor(Math.random() * ((diemdoi * 2) + 1));
    if (userscore >= diemdoi) {
        userscore -= diemdoi;
        console.log("ban nhan duoc " + ran + " diem");
        userscore += ran;
        console.log(userscore + " D");
    }
    else {
        console.log("ban khong du diem");
    }
}
}