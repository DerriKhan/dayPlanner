const currentTime = moment().format("H");

const currentDay = document.querySelector("#currentDay");
currentDay.textContent = moment().format("dddd, MMMM Do YYYY");

var b1 = document.querySelector(".b1").textContent;
var b2 = document.querySelector(".b2").textContent;
var b3 = document.querySelector(".b3").textContent;
var b4 = document.querySelector(".b4").textContent;
var b5 = document.querySelector(".b5").textContent;
var b6 = document.querySelector(".b6").textContent;
var b7 = document.querySelector(".b7").textContent;
var b8 = document.querySelector(".b8").textContent;
var b9 = document.querySelector(".b9").textContent;

b1 = parseInt(b1);
b2 = parseInt(b2);
b3 = parseInt(b3);
b4 = parseInt(b4);
b5 = parseInt(b5);
b6 = parseInt(b6);
b7 = parseInt(b7);
b8 = parseInt(b8);
b9 = parseInt(b9);

const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");
const t4 = document.querySelector(".t4");
const t5 = document.querySelector(".t5");
const t6 = document.querySelector(".t6");
const t7 = document.querySelector(".t7");
const t8 = document.querySelector(".t8");
const t9 = document.querySelector(".t9");

var hour = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
var time = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

function colors() {
  for (i = 0; i < hour.length; i++) {
    if (hour[i] < currentTime) {
      time[i].classList.add("past");
    } else if (hour[i] === currentTime) {
      time[i].classList.add("present");
    } else {
      input[i].classList.add("future");
    }
  }
}

colors();

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");

btn1.onclick = function(){
    var event = $(t1).val();
    localStorage.setItem("9", event);
}
$(t1).val(localStorage.getItem("9"));

btn2.onclick = function(){
    var event = $(t2).val();
    localStorage.setItem("10", event);
}
$(t2).val(localStorage.getItem("10"));

btn3.onclick = function(){
    var event = $(t3).val();
    localStorage.setItem("11", event);
}
$(t3).val(localStorage.getItem("11"));

btn4.onclick = function(){
    var event = $(t4).val();
    localStorage.setItem("12", event);
}
$(t4).val(localStorage.getItem("12"));

btn5.onclick = function(){
    var event = $(t5).val();
    localStorage.setItem("1", event);
}
$(t5).val(localStorage.getItem("1"));

btn6.onclick = function(){
    var event = $(t6).val();
    localStorage.setItem("2", event);
}
$(t6).val(localStorage.getItem("2"));

btn7.onclick = function(){
    var event = $(t7).val();
    localStorage.setItem("3", event);
}
$(t7).val(localStorage.getItem("3"));

btn8.onclick = function(){
    var event = $(t8).val();
    localStorage.setItem("4", event);
}
$(t8).val(localStorage.getItem("4"));

btn9.onclick = function(){
    var event = $(t9).val();
    localStorage.setItem("5", event);
}
$(t9).val(localStorage.getItem("5"));

