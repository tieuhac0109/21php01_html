// var row = "123456789";
// var row1 = row;
// var row2 = row;
// var row3 = row;
// var row4 = row;
// var row5 = row;

// document.write(row1 + "<br>" + row2 + "<br>" + row3 + "<br>" + row4 + "<br>" + row5);

// document.write("<br>");
// document.write("<br>");

// row1Length = row1.length;
// document.write(row1Length);
// // myRow = row1.substr(row1.length / 2 , 1);
// // document.write(myRow);
// document.write("<br>");
// document.write("<br>");
// lengthRow = row.length / 2;
// // var i = 1
// // myRow1 = row1.replace(row1.substr(lengthRow--, i) , "*")
// // document.write(myRow1);
// // document.write("<br>");
// // myRow2 = row2.replace(row2.substr(lengthRow--, i + 2) , "***")
// // document.write(myRow2);
// // document.write("<br>");
// // myRow3 = row3.replace(row3.substr(lengthRow--, i + 2) , "*****")
// // document.write(myRow3);
// // document.write("<br>");
// // myRow4 = row4.replace(row4.substr(lengthRow--, i + 2) , "*******")
// // document.write(myRow4);
// // document.write("<br>");
// // myRow5 = row5.replace(row5.substr(lengthRow--, i + 2) , "*********")
// // document.write(myRow5);
// // document.write("<br>");

var row = "123456789";
lengthRow = row.length / 2;
var star = "*";
for (var i = 1; i <=9; i = i + 2) {
	myRow = row.replace(row.substr(lengthRow, i) , star);
	lengthRow--;
	star++;
	document.write(myRow + "<br>");


}

