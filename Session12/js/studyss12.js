//MẢNG

var myArray = ["Nam", "Nguyen", "Huy"];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);

for (var i = 1; i <= myArray.length; i++) {
	document.write(i+". "+ myArray[i-1]+"<br>");
}



//Bài toán sắp xếp về làm lại
// var myArray3 = [1, 4, 2, 5, 8, 2, 11, 55, 5, 115];
// var temporary;
// for (var i = 0; i < myArray3.length; i++) {
// 	for (var j = i + 1; i <= ; i++) {
// 		Things[i]
// 	}
// 	temporary = myArray3[i];
// 	if (temporary <= myArray3[i+1]) {
// 		myArray3[i] = temporary;
// 	} else {
// 		myArray3[i] = myArray3[i+1];
// 		myArray3[i+1] = temporary;
// 	}
// }


var myArray4 = [
			['Nam', 1991, 'nam@yahoo.com', '0915335882'],
			['Huong', 1992, 'huong@yahoo.com', '0925335882'],
			['Huy', 1993, 'huy@yahoo.com', '0935335882'],
];

for (var i = 1, j = 1; i, j <= myArray4.length; i++, j++) {
	document.write(i+". "+ myArray4[i-1][j]+ myArray4[i-1][j]+ myArray4[i-1][j] + myArray4[i-1][j]+"<br>");
}
