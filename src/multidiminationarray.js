let ary = [
    ["Harry", 18, "male", "B.com"],
    ["Sunny", 19, "male", "BCA"],
    ["Sarah", 18, "female", "BCA"],
    ["Tom", 17, "male", "B.A"]
];
document.write(ary.length);

document.write("<table border='1px' cellspacing='0'>")
for (let a= 0; a < ary.length; a++){
    document.write("<tr>")
    for (let b= 0; b < ary[a].length; b++){
        document.write("<td>"+ary[a][b]+ "</td>");

    }
    document.write("</tr>");
};
document.write("</table>");
