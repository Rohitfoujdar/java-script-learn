// array mathods

// .sort()               .slice()          .find()

// .reverse()            .splice()         .findindex()

// .pop()                .isarray()        .includes()

// .push()               .indexof()        .some()

// .shift()              .lastindexof()    .foreach()

// .unshift()            .entries()        .tostring()

// .concat()             .every()          .valueof()

// .join()               .filter()         .fill()



// sort

// let ary= ["raman", "aman", "kartik", "kanak"];
// document.write(ary + "<br>")
// ary.sort();
// document.write(ary);


// reverse

// let ary= ["raman", "aman", "kartik", "kanak"];
// document.write(ary + "<br>")
// ary.sort();
// document.write(ary+ "<br>");
// ary.reverse();
// document.write(ary);


// pop

// let ary= ["raman", "aman", "kartik", "kanak"];
// document.write(ary + "<br>")
// ary.pop();
// document.write(ary + "<br>")


// push

// let ary= ["raman", "aman", "kartik", "kanak"];
// document.write(ary + "<br>");
// ary.push("rohit");
// document.write(ary + "<br>");


// shift

// let ary= ["raman", "aman", "kartik", "kanak"];
// document.write(ary + "<br>")
// ary.shift();
// document.write(ary + "<br>")


// unshift

// let ary= ["raman", "aman", "kartik", "kanak"];
// document.write(ary + "<br>")
// ary.unshift("rohit");
// document.write(ary + "<br>")


// concat

// let a= ["raman", "aman", "kartik", "kanak"];
// let b= ["ram", "shyam"];
// let c= ["riya", "priya"];

// let d= a.concat(b,c);
// document.write(d);

// // let ary= ["raman", "aman", "kartik", "kanak"];
// let b= ary.concat("ram", "shyam");
// document.write(b);



// Join

//  let a= ["raman", "aman", "kartik", "kanak"];
// let b= ["ram", "shyam"];
// let c= a.concat(b);
// document.write(c + "<br>");
// let d = c.join(" ");
// document.write(d);


// slice

// let a= ["raman", "aman", "kartik", "kanak"];
// document.write(a + "<br>");

// let b= a.slice(1, 3);
// document.write(b + "<br>");



// splice

// let a= ["raman", "aman", "kartik", "kanak"];
// document.write(a + "<br>");

// // a.splice(2,0,"java","script");
// a.splice(2,2,);
// document.write(a + "<br>");



// isArray

// let a= ["raman", "aman", "kartik", "kanak"];
// let a= 10;
// document.write(a + "<br>");

// let b= Array.isArray(a);
// document.write(b + "<br>");

// let a= ["raman", "aman", "kartik", "kanak"];
// let a= 10;
// document.write(a + "<br>");

// if(Array.isArray(a)){
//     document.write("this is array");
// }else {
//     document.write("this is not array");
// }



// indexOf

// let a= ["raman", "aman", "kartik", "kanak", "aman"];
// document.write(a + "<br>");

// let b= a.indexOf("aman",2);
// document.write(b);


// lastindexOf

// let a= ["raman", "aman", "kartik", "kanak", "aman"];
// document.write(a + "<br>");

// let b= a.lastIndexOf("aman");
// document.write(b);


// includes

// let a= ["raman", "aman", "kartik", "kanak", "aman"];
// document.write(a + "<br>");

// let b= a.includes("aman");
// document.write(b); 



// some

// let age= [10, 12, 16, 20,];
// document.write(age + "<br>");

// let b= age.some(checkAdult);
// document.write(b + "<br>");

// function checkAdult(ages){
// return ages >= 18;
// };



// every

// let age= [30, 42, 86, 20,];
// document.write(age + "<br>");

// let b= age.every(checkAdult);
// document.write(b + "<br>");

// function checkAdult(ages){
// return ages >= 18;
// };



// find

// let age= [10, 12, 18, 20,];
// document.write(age + "<br>");

// let b= age.find(check);
// document.write(b + "<br>");

// function check(ages){
//     return ages >= 18;
// }


// findindex

// let age= [10, 12, 18, 20,];
// document.write(age + "<br>");

// let b= age.findIndex(check);
// document.write(b + "<br>");

// function check(ages){
//     return ages >= 18;
// }


// filter

// let age= [10, 12, 18, 20,];
// document.write(age + "<br>");

// let b= age.filter(check);
// document.write(b + "<br>");

// function check(ages){
//     return ages >= 18;
// }



// tostring

// let a= ["raman", "aman", "kartik", "kanak",];
// document.write(a + "<br>");

// a.toString();
// document.write(a);



// fill

// let a= ["raman", "aman", "kartik", "kanak",];

// a.fill("java script");
// document.write(a + "<br>");



// foreach

let a= ["raman", "aman", "kartik", "kanak",];

a.forEach(loop);
function loop(name, index){
document.write(index + " : " + name + "<br>");
}