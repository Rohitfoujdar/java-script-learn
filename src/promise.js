// let a1= new Promise((resolve, reject) => {
//     console.log("promise is pending");
//     setTimeout(() => {
//         // console.log("promise is resolve");
//         resolve(true);
//     },5000)
// })

// let a2= new Promise((resolve, reject) => {
//     // console.log("promise is pending");
//     setTimeout(() => {
//         // console.log("promise is reject");
//         reject(new Error("promise error"))
//     },5000)
// })

// a1.then((value)=>{
// console.log(value);
// })

// a2.catch((error)=>{
//     console.log("error solve");
// })

// function getdata(dataid, getnextdata){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("success")
//             if(getnextdata){
//     getnextdata();
//             }
//         },6000)
//     })
// }

// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     // resolve("sucess");
//     reject("error");
// })

// let getpromise= () =>{
//     return new Promise((resolve, reject) => {
//      console.log("i ma promise")   
//     //  resolve("success")
//     reject();
//     })
// }

// let promise= getpromise();
// promise.then(()=>{
// console.log("promise done")
// })

// promise.catch(()=>{
//     console.log("rejected")
// })


// promise chain

function asyncfunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
         console.log("some data1")
         resolve("success")
        },5000)
    })
}

function asyncfunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
         console.log("some data2")
         resolve("success")
        },5000)
    })
}

console.log("fetchning data 1....................")
let p1 = asyncfunc1();
p1.then((res)=>{
    console.log("fetchning data 2....................")
    let p2 = asyncfunc2();
p2.then((res)=>{});
})

