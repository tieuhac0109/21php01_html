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

// for (var y = 0, x = 0; x, y < myArray4[0].length; y++, x++) {
// 	document.write(y+1 + " - " + myArray4[y][x] + " - " + myArray4[y][x+1] + " - " + myArray4[y][x+2] + " - " + myArray4[y][x+3] + "<br>");
// }

for (var y = 0, x = 0; y < myArray4.length; y++) {
	// for (var x = 0; x < myArray4[0].length; x++) {
		document.write(y+1 + " - " + myArray4[y][x] + " - " + myArray4[y][x+1] + " - " + myArray4[y][x+2] + " - " + myArray4[y][x+3] + "<br>");
	}
// }