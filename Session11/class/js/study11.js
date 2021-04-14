// var myString = "On The Way To Success, There Is No Trace Of Lazy Men";
// //Chiều dài của 1 chuỗi
// var lengString = 0
// lengString = myString.length;
// console.log(lengString);
// //Kiểm tra vị trí của ký tự trong chuỗi
// var positionO = 0;
// positionO = myString.indexOf('o');
// console.log(positionO);
// //
// var positionZ = 0;
// positionZ = myString.indexOf('z');
// console.log(positionZ);
// //
// var positionO = 0;
// positionO = myString.lastIndexOf('o');
// console.log(positionO);
// //
// //Cắt chuỗi
// var myCutString = "";
// //Cắt từ vị trí tới vị trí
// myCutString = myString.substring(14, 21);
// console.log(myCutString);
// //Cắt từ vị trí tới độ dài
// myCutString2 = myString.substr(14,7);
// console.log(myCutString2);
// //Thay thế chuỗi bằng chuỗi
// var newString = "";
// newString = myString.replace("On" , "In");
// console.log(newString);
// //Chuyển thành chữ hoa hoặc chữ thường toàn bộ chuỗi
// // var upperString = "";
// // var lowerString = "";
// // upperString = myString.to




//=========================================================
var myName = "Dang Van Hieu"
var lengName = 0
lengName = myName.length;
console.log(lengName);

var positionSpace1 = 0;
positionSpace1 = myName.indexOf(' ');
console.log(positionSpace1);

var positionSpace2 = 0;
positionSpace2 = myName.lastIndexOf(' ');
console.log(positionSpace2);





myCutLastname = myName.substr(0, positionSpace1);
console.log(myCutLastname);
var lengLastname = 0
lengLastname = myCutLastname.length;
console.log(lengLastname);

myCutFirstname = myName.substr(positionSpace2, lengName);
console.log(myCutFirstname);
var lengFirstname = 0
lengFirstname = myCutFirstname.length;
console.log(lengFirstname);

myCutMiddlename = myName.substring(positionSpace1, positionSpace2);
console.log(myCutMiddlename);
var lengMiddlename = 0
lengMiddlename = myCutMiddlename.length;
console.log(lengMiddlename);


document.write(myCutLastname);
document.write(myCutMiddlename);
document.write(myCutFirstname);

var newName = myCutLastname + myCutMiddlename + " " + myCutFirstname.replace(myCutFirstname , "21PHP01");
document.write("<br>" + newName);



var cutName1 = myCutFirstname.substr(0,2);
document.write("<br>" + cutName1);
var positionN = cutName1.indexOf('n');
document.write("<br>" + positionN);

var cutName2 = myCutFirstname.substr(2,1);
document.write("<br>" + cutName2);
var positionN = cutName2.indexOf('n');
document.write("<br>" + positionN);

var cutName3 = myCutFirstname.substr(3,1);
document.write("<br>" + cutName3);
var positionN = cutName3.indexOf('n');
document.write("<br>" + positionN);

var cutName4 = myCutFirstname.substr(4,1);
document.write("<br>" + cutName4);
var positionN = cutName4.indexOf('n');
document.write("<br>" + positionN);

var cutName5 = myCutLastname.substr(0,1);
document.write("<br>" + cutName5);
var positionN = cutName5.indexOf('n');
document.write("<br>" + positionN);

var cutName6 = myCutLastname.substr(1,1);
document.write("<br>" + cutName6);
var positionN = cutName6.indexOf('n');
document.write("<br>" + positionN);

var cutName7 = myCutLastname.substr(2,1);
document.write("<br>" + cutName7);
var positionN = cutName7.indexOf('n');
document.write("<br>" + positionN);

var cutName8 = myCutLastname.substr(3,1);
document.write("<br>" + cutName8);
var positionN = cutName8.indexOf('n');
document.write("<br>" + positionN);



var myFullname = "Dang Van Hieu Nam";
var countChar = 0;
var findChar = "n";
var positionChar = 0;
myFullname = myFullname.toLowerCase();
findChar = findChar.toLowerCase();
while (myFullname.indexOf(findChar) > -1) {
	positionChar = myFullname.indexOf(findChar);
	myFullname = myFullname.substr(positionChar + 1 , myFullname.length);
	countChar++;
}
document.write( "<br>" + findChar + " ");
document.write(countChar);


