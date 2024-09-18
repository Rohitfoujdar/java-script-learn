// Switch statement in javascript
// switch(expressio){
//     case condition 1:statement(s)
//     break;

//     case condition 2:statement(s)
//     break;

//     case condition 3:statement(s)
//     break;

//     default: statement(s)
// }

let day=3;

switch (day) {
    case 1:
        document.write("today is monday")
        break;

        case 2:
        document.write("today is tuesday")
        break;

        case 3:
        document.write("today is wednesday")
        break;

        case 4:
        document.write("today is thursday")
        break;

        case 5:
        document.write("today is friday")
        break;

        case 6:
        document.write("today is saturday")
        break;

        case 7:
        document.write("today is sunday")
        break;

    default:
        document.write("select the valid number")
        break;
}

document.write("<br>");

let age=20;

switch (true) {
    case (age>15 && age!=15):
        document.write("you are fit")
        break;

        case (age>25 || age!=15):
        document.write("you are not fit")
        break;

    default:
        document.write("fill valid age")
        break;
}