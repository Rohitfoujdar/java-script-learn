// document.write("<b>Rohit Foujdar</b><br>");
// document.write("<i>Hii everyone</i>");

// var a= "Rohit foujdar";
// a= "Jaat<br>";
// var x= 25
// document.write(a);
// document.write(x);

// let a="rohit foujdar";
// a="Jaat";
// // let a="foujdar";
// document.write(a);

// const a= "rohit foujdar";
// const b="jaat"
// // a="foujdar";
// document.write(b);
// document.write(a);

// // Different types of data types
// var x="Hello world";----------String

// var x= 25;-----------Number

// var x=true;-----------Boolean

// var x=["HTML", "CSS", "JAVA SCRIPT"];-------------Array

// var x={first:"jaat", last:"Rohit"};--------------Object

// var x=null;--------------null

// var x;-----------------undefined


let x="rohit";
x=27;
x=undefined;
x=false;
x=["HTML", "CSS", "JS"];
x={
    first:"Rohit", second:"foujdar"
};

document.write(x);
document.write("<br>")
document.write(typeof x);

// Different type of arithmatic operator

// (+) -----------------Addition

// (-) ---------------------- Substraction

// (*) ---------------------- multiplication

// (**) -----------------------exponentiation

// (/) -----------------------Divison

// (%) ------------------------modulas(remainder)

// (++) ----------------------increament

// (--) ---------------------decreament


// let a= 222;

// let b= 333;

// let c=a+b;

// let a= 222;

// let b= 333;

// let c=a-b;

// let a= 222;

// let b= 333;

// let c=a*b;

// let a= 222;

// let b= 333;

// let c=a/b;

// let a= 10;

// let b= 3;

// let c=a**b;

// let a= 10;

// let b= 3;

// a++;  (++=a=a+b)

let a= 10;

let b= 3;

a--;

document.write("<br>")

document.write(a+b);


// console chrome

let r= 35;
r= 34;


console.log(r);

console.table([1, 2, 3]);

// console.error("somthing went wrong");
console.time("test")
console.warn("this is just warn");
console.warn("this is just warn");
console.warn("this is just warn");
console.warn("this is just warn");
console.timeEnd("test")
// console.clear();



// Different type of comparision operetor
// (==)----------equal to

// (===)------------equal value and equal type

// (!=)---------------not equal

// (!==)----------not equal value or not equal type

// (>)-------greater then 

// (<)-------less then

// (>=)--------greater than or equal to

// (<=)---------less than or equal to

let o= 9,
h=8;

console.log(o==h);
console.log(o===h);
console.log(o!=h);
console.log(o>h);
console.log(o<h);

document.write("<br>");

// if statement in java script

let i= 200,
 t= 200;

 
 if (i!=t){
    document.write("equal");
 }

if (i==t) {
document.write("value");
}

document.write("<br>");


// Different types of logical operetor
// (&&)------------logical and

// (||)-----------logical OR

// (!)------------logical not


let f= 20,
u=20;

if(f==u && f===u){
    document.write("&&");
}

document.write("<br>");


if(f>=u||f!=u){
    document.write("OR");
}

document.write("<br>");

if (!f!=u){
    document.write("Not");
}


document.write("<br>");


// if else statement in java script

// if(){

// }else(){

// }


let fullname="rohit foujdar";
gender="male",
z=100;

if(gender=="female") {
    document.write("mr."+fullname);
}else{
    document.write("mr.jaat")
}

document.write("<br>");

if(z>150){
    document.write("z")
}else{
    document.write("else");
}
document.write("<br>");



// conditional ternary operator
// (condition)? var="true": var="false";
// OR
// var= (condition)? true:false

let sin= 100, cos;
// (sin==100)? cos = "true": cos = "false";

cos = (sin===500)? true : false;
document.write(cos);

document.write("<br>");


// Switch statement in javascript
// switch(expressio){
//     case condition 1:statement(s)
//     break;

//     case condition 2:statement(s)
//     break;

//     case condition 3:statement(s)
//     break;

//     default: statement(s)
// }

let day=3;

switch (day) {
    case 1:
        document.write("today is monday")
        break;

        case 2:
        document.write("today is tuesday")
        break;

        case 3:
        document.write("today is wednesday")
        break;

        case 4:
        document.write("today is thursday")
        break;

        case 5:
        document.write("today is friday")
        break;

        case 6:
        document.write("today is saturday")
        break;

        case 7:
        document.write("today is sunday")
        break;

    default:
        document.write("select the valid number")
        break;
}

document.write("<br>");

let age=20;

switch (true) {
    case (age>15 && age!=15):
        document.write("you are fit")
        break;

        case (age>25 || age!=15):
        document.write("you are not fit")
        break;

    default:
        document.write("fill valid age")
        break;
}


// Alert Box
// alert()

// alert("Hello Rohit")

// let A=20, B=30;
// if(A>B){
//     alert("A is greater then");
// }else{
//     alert("B is greater then");
// }


// Confirm Box
// confirm("do you have ram")

    // let C = confirm("Do you like website")
    // if(C){
    //     alert("thank you");
    // }else{
    //     alert("sorry buddy");
    // }


// prompt box
// prompt("what is your age:")

// let D= prompt("what is your age:");

// document.write(D);

// document.write("<br>");

// Function syntax in java script
// function funtionName(){
//     statement
// }

// funtionName();------call

function fullName(){
    document.write("Hello world")
}

function number(){
    document.write("confirm")
}

fullName();
document.write("<br>");

number();
document.write("<br>");

fullName();
document.write("<br>");

number();
document.write("<br>");

fullName();
document.write("<br>");

number();
document.write("<br>");

fullName();
document.write("<br>");

number();
document.write("<br>");

fullName();



// function parameters in java script 2
// function functionname(parameter1,parameter2){
//     statement
// }

// funtionname(argument1,argument2);

document.write("<br>");


function fullName2(fname, lname){
document.write("Hello", fname, lname);
}

fullName2('java', 'script');

document.write("<br>");

function sum(a, b){
    document.write(a + b);
}

sum(20, 30);


// function return value in javascript
// function functionname(parameter1,parameter2){
//     //     statement
//     retun value
//     // }

//     var a=functionname(arguments1, arguments2);

document.write("<br>");

function fullname3(fname, lname){
    // var fn1= fname + " " + lname;
    var a= fname + lname;
    return a;

}
var fn = fullname3("node", "js");
document.write(fn);

document.write("<br>");


function sum1(math, sc, gk){
    var e = math + sc + gk
    return e;
}

function percentage(tt){
    var per= tt/300*100;
    document.write(per);
}

var fn3 = sum1(80, 80, 80)
percentage(fn3);
// document.write(fn3);

document.write("<br>");


// global & local variable in javascript

// var ab= 10;------global 

// function abc(){
//     var ba= 20;--------local
// }

// var ab=20;

function abc(){
    var ab=20;
    document.write(ab);

}
abc();
document.write("<br>");
document.write(ab);

// javascript basic Event
// .click(onclick)                  .key press(onkeypress)

// .Double click(ondblclick)            .Key up(onkeyup)

// .Right click(oncontextmenu)             .Load(onload)

// .Mouse hover(onmouseenter)            .Unload(onunload)

// .Mouse out(onmouseout)               .Scroll(onscroll)

// .Mouse Down(onmousedown)              .Resize(onresize)

// .Mouse up(onmouseup)

function Event(){
    document.write("Hello R")
}


// Type of loop in java script
// .While loop

// .do/while loop

// .for loop

// for/in loop (object)

// foreach (array)


// while loop

var j= 1;
document.write("<ul>")
while(j <= 10){
    document.write("<li>while</li>");
    j = j + 1;
}
document.write("</ul>")

// var j= 10;
// document.write("<ul>")
// while(j >= 1){
//     document.write("<li>while</li>");
//     j = j - 1;
// }
// document.write("</ul>")
