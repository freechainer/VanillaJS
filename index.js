// console.log('I am working. I am JS. I am Beautiful. I am worth it');

// let a = 221;
// var b = a - 5;
// a = 4;
// console.log(b, a);

// let => 변수를 수정할수 있다.
// const => 변수를 수정할수 없다.
// var => 일반적으로 쓰는 변수 변수를 수정할수 있다.

/*
to do : finish this
to do : finish this
to do : finish this         -> 멀티 주석
to do : finish this
to do : finish this
*/

/*
String
const what = "Heoinhaeng";

console.log(what);
*/

/*
Boolean
const wat = true; or false;
*/

/*
Number
const wat = 666;
*/

/*
Float 
const wat = 55.1;
*/

// const monday = "Mon";
// const tue = "Tue";
// const wed = "Wed";
// const thu = "Thu";
// const fri = "Fri";

// console.log(monday, tue, wed, thu, fri);

/*
const something = "something"
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 54, true, "stuff", "lalala", something];

console.log(daysOfWeek);
*/

/*
const inhaengInfo = {
    name : "Heoinhaeng", 
    age : 27,
    gender : "Male",
    isHandsome: true,
    favMovies: ["Home Alone", "Iron Man", "Big Short"],
    favFood : [
        {
            name:"Kimchi", 
            fatty:false
        }, 
        {
            name:"Cheese burger", 
            fatty: true
        }      
    ]
}

console.log(inhaengInfo)
*/

// function sayHello(name, age) {
//     console.log('Hello!', name, 'you have', age, 'years of age.');    
// }

// sayHello("inhaeng", 15);

/*
function sayHello(name, age) {
    return `Hello ${name} you are ${age} years old`;    
}

const greetInhaeng = sayHello('Inhaeng', 27)

console.log(greetInhaeng)
*/

/*
const calculator = {
    plus: function(a, b) {
        return a + b;
    }
}

// console.log(greetInhaeng)
const plus = calculator.plus(5, 5)
console.log(plus)
*/

/*
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = 'red';
document.title = 'I own you now';
*/

/*
const title = document.querySelector("#title");

function handleClick(event){
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);
*/

/*
if(10 === 5) {
    console.log('hi')
}   else {
    console.log('ho')
}
*/

/*
if(10 === 5) {
    console.log('hi')
    } else if("10" === "10") {
    console.log('lalala'); 
    } else {
    console.log("ho");
}
*/

// if(20 > 5 && "inhaeng" === "inhaeng"){
//     console.log('yes')
//     } else {
//     console.log('no');   
//     }


    // if(20 > 5 || "inhaeng" === "inhaeng"){
    //     console.log('yes')
    //     } else {
    //     console.log('no');   
    //     }


// true && true = true;
// false && true = false;
// true && false = false;
// false && false = false;

// true || true = true;
// false || true = true;
// true || false = true;
// false || false = false;

/*
const age = prompt("how old are you?");

if(age >= 18 && age <= 21) {
    console.log('you can drink but you shoul not');
} else if (age > 21) {
    console.log('go ahead')
} else {
    console.log('too young')
}
*/

// const title = document.querySelector('#title');

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init() {
//     title.style.color = BASE_COLOR;
//     title.addEventListener('click', handleClick);
// }
// init();

/*
function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener('click', handleClick);
}
init();

function handleOffline() {
    console.log("Bye bye");
}

function handleOnline() {
    console.log("welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

/*
const title = document.querySelector('#title');

const CLICKED_CLASS = 'clicked';

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}

function init() {
    title.addEventListener('click', handleClick);
}
init();
*/

const title = document.querySelector('#title');

const CLICKED_CLASS = 'clicked';

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener('click', handleClick);
}
init();