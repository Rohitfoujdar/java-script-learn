// // // console.log("hello1")
// // // console.log("hello2")
// // // console.log("hello3")
// // // console.log("hello4")

// // // function hello(){
// // //     console.log("hello");
// // // }

// // // console.log("1")
// // // console.log("2")

// // // setTimeout(()=>{
// // //     console.log("hello");
// // // }, 2000);

// // // console.log("3")
// // // console.log("4")

// // function getdata(dataid, getnextdata){
// //     setTimeout(()=>{
// //         console.log("data",dataid);
// //         if(getnextdata){
// // getnextdata();
// //         }
// //     },3000)
// // }
// // //callbackhell
// // getdata(1, ()=>{
// //     console.log("geting data 2...........")
// // getdata(2, ()=>{
// //     console.log("geting data 3...........")
// //     getdata(3, ()=>{
// //         console.log("geting data 4...........")
// //         getdata(4)
// //     })
// // });
// // });



// async function hello(){
//     console.log("log")
// }

// function api(){
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("weather data")
//         resolve("200")
//        },2000)
//     })
// }

// async function getweatherdata(){
// await api();
// await api();

// }

function getdata(dataid){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log("data",dataid);
                resolve("success")
        
            },3000)
        })
    }

    // async function getalldata() {
    //     console.log("fetching data1...........")
    //     await getdata(1);
    //     console.log("fetching data2...........")
    //     await getdata(2);
    //     console.log("fetching data3...........")
    //     await getdata(3);
    // }

    (async function () {
        console.log("fetching data1...........")
        await getdata(1);
        console.log("fetching data2...........")
        await getdata(2);
        console.log("fetching data3...........")
        await getdata(3);
    })();