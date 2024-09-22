// // // how to trget DOM oobject

// // .id -------------- document.getElementById(id)

// // .class Name --------------- document.getElementsBuyclassName(Name)

// // .Tag Name -------------------- document.getElementByTagName(Name)

// .document                         .document.link

// .document.all                     .document.form

// .document.documentElement         .document.doctype

// .document.head                    .document.URL

// .document.title                   .document.baseURl

// .document.body                    .document.domain

// .document.images

// .document.anchors



// DOM manipulation

// selecting with id
// document.getElementByid("myid")

// selecting with class 
// document.getElementByclassname("classname")

// selecting with tag 
// document.getElementBytagname("p")


// queryselectors

// document.querySelector("tagname/class/id")

// var a = document.querySelectorAll("h2"); //1 element
// console.log(a);

// let a= document.querySelector("div");
// console.dir(a);

// a.innerText ="how";


// attributes

// .getAttribute(attr) to get the attribute value

// .setAttribute(attr,value) to set attribute value

// let a= document.querySelector("div");
// console.log(a);

// let b= a.getAttribute("id");
// let c= a.getAttribute("name");


// console.log(c);


// let a= document.querySelector("p");
// console.log(a.getAttribute("class"));

// let a= document.querySelector("p");
// console.log(a.setAttribute("class", "newclass"));


// style

// let a = document.querySelector("div");
// console.log(a);

// a.style.backgroundColor="Yellow";
// a.style.fontSize= "20px";


// insert Element

// .node.append(el) adds at the end of node (inside)

// .node.prepend(el) adds at the start of node (inside)

// .node.before(el) adds at the before of node (outside)

// .node.after(el) adds at the after of node (outside)


// let a= document.createElement("button");
// a.innerText="download now"

// console.log(a);

// let div= document.querySelector("div");
// // div.append(a);
// // div.prepend(a);
// // div.before(a);
// div.after(a);


// // Delete node

// // node.remove()

// let par= document.querySelector("p")
// par.remove("p")

// let a= document.createElement("button");
// a.innerText="click me";
// a.style.backgroundColor = "red";
// a.style.color = "white";

// let b= document.querySelector("body");
// b.prepend(a);


// let c= document.querySelector("p");
// console.log(c);


// DOM traversal mathod

//parentElement

// let a= document.getElementById("inner").parentElement.style.backgroundColor = "red";

// let b= document.getElementById("inner").parentElement;

// console.log(b)

// let c= document.getElementById("child").parentElement.style.backgroundColor = "black";


//children

// let b= document.getElementById("inner").children[2].style.backgroundColor = "black";

// let a= document.getElementById("inner").children;

// console.log(a);


// firstElementchild

// let a= document.getElementById("inner").firstElementChild.style.backgroundColor = "black";

// let b= document.getElementById("inner").firstElementChild;

// console.log(a);


// lastElementchild

// let a= document.getElementById("inner").lastElementChild.style.backgroundColor = "black";

// let b= document.getElementById("inner").lastElementChild;

// console.log(a);


// previous& next sibling

let a= document.getElementById("child").previousElementSibling.style.backgroundColor = "black";

let b= document.getElementById("child").previousElementSibling;

// let a= document.getElementById("child").nextElementSibling.style.backgroundColor = "black";

// let b= document.getElementById("child").nextElementSiblingElementSibling;

console.log(a);


// DOM append mathod

// .appendChild

// .insertBefore