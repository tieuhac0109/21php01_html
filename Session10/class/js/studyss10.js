// Vòng lặp for trong javascript

// for (var i = 0; i < 10; i++) {
// 	document.write(i);
// 	document.write("<br>");
// }


for (var i = 0; i <= 100; i++) {
	if (i % 3 == 0) {
		document.write("So" + i + "chia het cho 3 <br>");
	}
	if (i % 5 == 0) {
		document.write("So" + i + "chia het cho 5 <br>");
	}
	if (i % 15 == 0) {
		document.write("So" + i + "chia het cho 15 <br>");
	}
	if ((i % 3 != 0) && (i % 5 != 0) && (i % 15 != 0)){
		document.write("So" + i + "khong chia het cho 3, 5, 15 <br>");
	}			
}
 
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


for (var i = 0; i <= 100; i++) {
	if (i % 3 == 0) {
		document.write("So" + i + "chia het cho 3 <br>");
	} else if (i % 5 == 0) {
		document.write("So" + i + "chia het cho 5 <br>");
	} else if (i % 15 == 0) {
		document.write("So" + i + "chia het cho 15 <br>");
	} else if ((i % 3 != 0) && (i % 5 != 0) && (i % 15 != 0)){
		document.write("So" + i + "khong chia het cho 3, 5, 15 <br>");
	}			
}


document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


for (var i = 0; i <= 100; i++) {
	if (i % 15 == 0) {
		document.write("So" + i + "chia het cho 15 <br>");
	} else if (i % 5 == 0) {
		document.write("So" + i + "chia het cho 5 <br>");
	} else if (i % 3 == 0) {
		document.write("So" + i + "chia het cho 3 <br>");
	} else if ((i % 3 != 0) && (i % 5 != 0) && (i % 15 != 0)){
		document.write("So" + i + "khong chia het cho 3, 5, 15 <br>");
	}			
}



//Vòng lặp while và do while
var i = 10;
while ( i > 0) {
	document.write(i + "<br>");
	i--;
}


// var i = 10;
// do (var i > 0) {
// 	document.write(i + "<br>");
// 	i--;
// } while (i>10);

var i = 5;
switch (i){
        case 2:
            document.write("Thu2");
            break;
        case 3:
            document.write("Thu3");
            break;
        case 4:
            document.write("Thu4");
            break;
        case 5:
            document.write("Thu5");
            break;
        case 6:
            document.write("Thu6");
            break;
        case 7:
            document.write("Thu7");
            break;
        case 8:
            document.write("Chunhat");
            break;
        default:
        	document.write("noday");
            break;
    }


var candy = 0;
var candyShell = 0;
var money = 2000;
var price = 200;
candy = money / price;
candyShell = candy;
while (candyShell >= 2) {
	candyShell = candyShell - 2;
	candyShell++;
	candy++;
}



