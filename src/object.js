let a= {
    fname : 'java',
    lname : 'script',
    age : 18,
    email : 'rohitfoujdar8696@gmail.com',
    favmovies : ["sholay","milan","krish"],
    sallery : function(){
        return 25000;
    },
    fullname : function(){
        return this.fname + " " + this.lname
    },
    living : {
        'city': 'Noida',
        'country': 'India'
    }
}

// document.write(a.fname);
// document.write(a.favmovies);
// document.write(a.favmovies[2]);
// document.write(a.sallery());
// document.write(a.fullname());
document.write(a.living.city + "<br>");


console.log(a);


// 2nd mathod of object

let person = new Object();

person.fname = 'java';
person.lname = "script";

document.write(person.fname);