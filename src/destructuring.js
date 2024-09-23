// let arr=[1, 2, 3, 4, 5, 6];
// let  [a,b,c,d, ...rest]=arr
// let [a, , c, ...rest]=arr
// let {a,b}={a:1, b:5}
// console.log(a,b,);

//spread operator
let arr=[1,2,3];
let obj={...arr};
console.log(obj);

function sum(v1,v2,v3){
    return v1+v2+v3
};

console.log(sum(...arr));

let obj1={
    name:"java script",
    company:"abc",
    address:"xyz"
}

console.log({...obj1, name:"script java", company:"xyz",address:"abc"})
