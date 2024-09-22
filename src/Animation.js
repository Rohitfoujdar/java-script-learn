// setInterval

// let a= 0;

// let id= setInterval(anim, 10);

// function anim(){
//      a = a + 10;
// let b= document.getElementById("d");
// b.style.marginLeft= a + "px";
// }


// clearInterval

// let a= 0;

// let id= setInterval(anim, 500);

// function anim(){
//      a = a + 10;
//      if(a==200){
// clearInterval(id);
//      }else{
//         let b= document.getElementById("d");
//         b.style.marginLeft= a + "px";
//      }};



    //  setTimeout

    let a= setTimeout(function anim(){
        b.style.width = "500px";
    }
, 3000);

    let b= document.getElementById("d");

// function anim(){
// b.style.width = "500px";
// }


    // clearTimeout

    function stop(){
        clearTimeout(a);
    }
