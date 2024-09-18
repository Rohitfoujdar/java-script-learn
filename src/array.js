// let a = [10, 20, 30];----array
//           0,  1,  2----index

// let ary = [10, 20, 30, 40, 50];
// document.write(ary);

// let ary = [10, 20, 30, 40, 50];
// document.write(ary[3]);

// let ary = [10, 20, 30, 40, 50];
// let sum = 0;
// document.write("<ul>");
// for(let a = 0; a <= 4; a++){
//     document.write("<li>" +ary[a] + "</br>" + "</li>");
//     sum = sum + ary[a];
// }
// document.write("</ul>")
// document.write("Total sum : " + sum);

// let ary = [10, "Java", "script", true, null];
// document.write("<ul>");
// for(let a = 0; a <= 4; a++){
//     document.write("<li>" +ary[a] + "</br>" + "</li>");
// }
// document.write("</ul>")


// let ary = new Array(10, "Java", "script", true, null);
// document.write("<ul>");
// for(let a = 0; a <= 4; a++){
//     document.write("<li>" +ary[a] + "</br>" + "</li>");
// }
// document.write("</ul>")

// let ary = new Array();
// ary[0] = 10;
// ary[1] = "Java";
// ary[2] = "Script";
// ary[3] = true;


// document.write("<ul>");
// for(let a = 0; a <= 4; a++){
//     document.write("<li>" +ary[a] + "</br>" + "</li>");
// }
// document.write("</ul>")

let ary = new Array(4);
for (let g= 0; g < 4; g++){
    ary[g] = prompt("enter the value: ");
}
document.write("<ul>");
for(let a = 0; a < 4; a++){
    document.write("<li>" +ary[a] + "</br>" + "</li>");
}
document.write("</ul>")

