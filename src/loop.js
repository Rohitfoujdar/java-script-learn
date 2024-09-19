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


// for loop

for(let n = 1; n<=10; n++){
    document.write("java script loop<br>");
}

let a= {
    fname : 'java',
    lname : 'script',
    age : 18,
    email : 'rohitfoujdar8696@gmail.com',
}

for (let key in a){
    document.write(key + " : " + a[key] + "<br>")
}
