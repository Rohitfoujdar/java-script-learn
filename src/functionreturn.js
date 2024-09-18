// / function return value in javascript
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
