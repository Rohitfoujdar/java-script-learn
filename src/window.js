//windowheight
// let a= window.innerHeight;
// console.log(a);
// let b= window.outerHeight;
// console.log(b);



//windowwidth
// let a= window.innerWidth;
// console.log(a);
// let b= window.outerWidth;
// console.log(b);


//open & close window

// let a= document.getElementById("button");

// let a;
// function newtab(){
// a=window.open("https://kickrtechnologies.com/")
// }

// function closetab(){
//     a.close();
//     }
    

// moveTo & moveBy
let a;
function newtab(){
a=window.open("","_blank", "width= 500px, height= 300px, left=400px");
console.log("Hii ---- ", a);
}

function move(){
    newtab()
    // a.moveTo(100,100);
    console.log("bye ---- ", a);
}
