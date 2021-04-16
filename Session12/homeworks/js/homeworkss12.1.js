//YÊU CẦU 1, 2

//Khai báo danh sách học viên
var myClass = [
		["STT", "Họ và tên" , "Tuổi" , "Số điện thoại" , "Email" , "Quê quán"],
		["1", "Nguyễn Văn Huy" , "24" , "0935335882" , "nguyenvanhuy@gmail.com" , "Quảng Trị"],
		["2", "Lê Hạnh Dung" , "27" , "0945335882" , "lehanhdung@yahoo.com" , "Quảng Ngãi"],
		["3", "Cao Xuân Tuấn" , "23" , "0965335882" , "tuancao113@gmail.com" , "Quảng Nam"],
		["4", "Đỗ Thị Tươi" , "21" , "0985335882" , "tuoitinhtao@outlook.com" , "Quảng Bình"]
];

document.write("Danh sách học viên lớp 21PHP01: <br>");

//Tạo bảng chứa danh sách học viên
var myClassTable = "<table border=2>";
   for (var y = 0; y < myClass.length; y++ ) { // for each row
      myClassTable += "<tr>";
      for (var x = 0; x < myClass[y].length; x++ ) { // for each clm
         myClassTable += "<td>" + myClass[y][x] + "</td>";
      }
       myClassTable += "</tr>";
   }
   myClassTable += "</table>";

//In danh sách học viên
 document.write("<br>" + myClassTable);



//YÊU CẦU 3

//Thêm thông tin 2 học viên vào mảng
myClass.push(["5", "Lâm Tâm Như" , "22" , "0915335883" , "info@lamtamnhu.com" , "Quảng Ninh"]);
myClass.push(["6", "Tiêu Phong" , "26" , "0906885226" , "tieuphong@thandieu.net" , "Đà Nẵng"]);

//Tạo bảng chứa danh sách học viên
var myClassTable1 = "<table border=2>";
   for (var y = 0; y < myClass.length; y++ ) { // for each row
      myClassTable1 += "<tr>";
      for (var x = 0; x < myClass[y].length; x++ ) { // for each clm
         myClassTable1 += "<td>" + myClass[y][x] + "</td>";
      }
       myClassTable1 += "</tr>";
   }
   myClassTable1 += "</table>";

document.write("<br>");
document.write("<br>");

//In danh sách học viên
document.write("Danh sách học viên lớp 21PHP01 sau khi bổ sung: <br>");
document.write("<br>" + myClassTable1);

 //YÊU CẦU 4

 //Duyệt mảng 2 chiều để tìm mảng có chứa "Nguyễn Văn Huy"
for (var i = 0; i < myClass.length; i++) {
  //Tìm và gán vị trí của "Nguyễn Văn Huy" trong mảng
  var a = myClass[i].indexOf("Nguyễn Văn Huy");
  //Nếu mảng có "Nguyễn Văn Huy", thay thế thành "Nguyễn Phi Hùng"
  if (a != -1) {
    myClass[i].splice(a, 1, "Nguyễn Phi Hùng");
  }
}
//Tạo bảng chứa danh sách học viên sau khi thay thế
var myClassTable2 = "<table border=2>";
   for (var y = 0; y < myClass.length; y++ ) { // for each row
      myClassTable2 += "<tr>";
      for (var x = 0; x < myClass[y].length; x++ ) { // for each clm
         myClassTable2 += "<td>" + myClass[y][x] + "</td>";
      }
       myClassTable2 += "</tr>";
   }
   myClassTable2 += "</table>";

document.write("<br>");
document.write("<br>");

//In danh sách học viên
document.write("Danh sách học viên lớp 21PHP01 sau khi thay thế (lần 1): <br>");
document.write("<br>" + myClassTable2);

 

 //YÊU CẦU 5


 //Duyệt mảng 2 chiều để tìm mảng và vị trí của "Quê quán"
for (var j = 0; j < myClass.length; j++) {
  var q = myClass[j].indexOf("Quê quán");
  if (q != -1) {
    var locationHometown = q;
    console.log(q);
  }
}
 //Duyệt mảng 2 chiều để tìm mảng và vị trí của "Email"
for (var k = 0; k < myClass.length; k++) {
  var e = myClass[k].indexOf("Email");
  if (e != -1) {
    var locationEmail = e;
    console.log(e);
  }
}

//  //Duyệt mảng 2 chiều để tìm mảng có chứa "Đà Nẵng"
// for (var j = 0; j < myClass.length; j++) {
//   //Tìm và gán vị trí của "Đà Nẵng" trong mảng
//   var c = myClass[j].indexOf("Đà Nẵng");
//   //Nếu mảng có "Nguyễn Văn Huy", thay thế thành "Nguyễn Phi Hùng"
//   if (c != -1) {
//     myClass[j].splice(c, 1, "Hải Phòng");
//   }
// }
// console.log(myClass[6]);

//Gọi từng email trong mảng để kiểm tra đuôi có phải @gmail.com không
for (var l = 1; l < myClass.length; l++) {
  // mailClass = myClass[l][locationEmail];
  // myCutEmail = mailClass.substring(mailClass.indexOf('@') + 1 , mailClass.indexOf('.'));
  myCutEmail = myClass[l][locationEmail].substring(myClass[l][locationEmail].indexOf('@') + 1 , myClass[l][locationEmail].indexOf('.'));
  if (myCutEmail == "gmail") {
    myClass[l].splice(locationHometown, 1, "Hải Phòng");
  }
  //Duyệt mảng 2 chiều để tìm mảng có chứa "Đà Nẵng"
  var c = myClass[l].indexOf("Đà Nẵng");
  if (c != -1) {
    myClass[l].splice(c, 1, "Hải Phòng");
  }
}
//Tạo bảng chứa danh sách học viên sau khi thay thế
var myClassTable3 = "<table border=2>";
   for (var y = 0; y < myClass.length; y++ ) { // for each row
      myClassTable3 += "<tr>";
      for (var x = 0; x < myClass[y].length; x++ ) { // for each clm
         myClassTable3 += "<td>" + myClass[y][x] + "</td>";
      }
       myClassTable3 += "</tr>";
   }
   myClassTable3 += "</table>";

document.write("<br>");
document.write("<br>");

//In danh sách học viên
document.write("Danh sách học viên lớp 21PHP01 sau khi đã thay thế (lần 2): <br>");
document.write("<br>" + myClassTable3);



//YÊU CẦU 6

//Duyệt mảng 2 chiều để tìm mảng và vị trí của "Tuổi"
for (var m = 0; m < myClass.length; m++) {
  var t = myClass[m].indexOf("Tuổi");
  if (t != -1) {
    var locationAge = t;
    // console.log(t);
  }
}


//Tạo 1 mảng sao của mảng ban đầu
var temporaryClass = [
    ["STT", "Họ và tên" , "Tuổi" , "Số điện thoại" , "Email" , "Quê quán"],
    ["1", "Nguyễn Phi Hùng" , "24" , "0935335882" , "nguyenvanhuy@gmail.com" , "Hải Phòng"],
    ["2", "Lê Hạnh Dung" , "27" , "0945335882" , "lehanhdung@yahoo.com" , "Quảng Ngãi"],
    ["3", "Cao Xuân Tuấn" , "23" , "0965335882" , "tuancao113@gmail.com" , "Hải Phòng"],
    ["4", "Đỗ Thị Tươi" , "21" , "0985335882" , "tuoitinhtao@outlook.com" , "Quảng Bình"],
    ["5", "Lâm Tâm Như" , "22" , "0915335883" , "info@lamtamnhu.com" , "Quảng Ninh"],
    ["6", "Tiêu Phong" , "26" , "0906885226" , "tieuphong@thandieu.net" , "Hải Phòng"]
];

var lengthString = myClass.length;
// //Gọi từng Tuổi trong mảng để kiểm tra
for (var n = 1; n < lengthString; n++) {
  //Hỏi thầy vì sao khi khi đưa myClass[n][locationAge] thì lỗi??? -> phải tạo mảng thay thế (nguyên nhân là do mảng xóa phần tử nên quay ngược lên phía trên mảng mất đi phần tử đó)
  var ageClass = temporaryClass[n][locationAge];
 
  // Đếm lại số mảng trong mảng 2 chiều
  var lengthNewString = myClass.length;

  // Tìm số mảng đã xóa
  var numClearString = lengthString - lengthNewString;

  if (ageClass >= 23 && ageClass <= 26) {

    //Xóa phần tử không thỏa điều kiện khỏi mảng
    newClass = myClass.splice(n - numClearString, 1);
  }
}
//Tạo bảng chứa danh sách học viên sau khi đã xóa
var myClassTable4 = "<table border=2>";
   for (var y = 0; y < myClass.length; y++ ) { // for each row
      myClassTable4 += "<tr>";
      for (var x = 0; x < myClass[y].length; x++ ) { // for each clm
         myClassTable4 += "<td>" + myClass[y][x] + "</td>";
      }
       myClassTable4 += "</tr>";
   }
   myClassTable4 += "</table>";

document.write("<br>");
document.write("<br>");

//In danh sách học viên
document.write("Danh sách học viên lớp 21PHP01 sau khi đã xóa các học viên theo yêu cầu: <br>");
document.write("<br>" + myClassTable4);