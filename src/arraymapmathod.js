// let a= [10,20,30,40];

// let b= a.map(test);

// function test(c){
//     return c*10
// }
// document.write(b);

let a= [
    {fn: "java", ln: "script"},
    {fn: "react", ln: "js"},
    {fn: "node", ln: "js"}
];

let b= a.map(test);

function test(c){
    return c.fn + " " +c.ln;
}
document.write(b);