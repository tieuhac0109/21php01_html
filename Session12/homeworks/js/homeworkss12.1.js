var myClass = [
		["STT", "Họ và tên" , "Tuổi" , "Số điện thoại" , "Email" , "Quê quán"],
		["1", "Nguyễn Văn Huy" , "18" , "0935335882" , "nguyenvanhuy@gmail.com" , "Quảng Trị"],
		["2", "Lê Hạnh Dung" , "19" , "0945335882" , "lehanhdung@yahoo.com" , "Quảng Ngãi"],
		["3", "Cao Xuân Tuấn" , "20" , "0965335882" , "tuancao113@hotmail.com" , "Quảng Nam"],
		["4", "Đỗ Thị Tươi" , "21" , "0985335882" , "tuoitinhtao@outlook.com" , "Quảng Bình"]
];

document.write("Danh sách học viên lớp 21PHP01: <br>");

var myClassTable="<table border=2>";
   for (var y=0; y<myClass.length; y++ ) { // for each row
      myClassTable += "<tr>";
      for (var x=0; x<myClass[y].length; x++ ) { // for each clm
         myClassTable += "<td>" + myClass[y][x] + "</td>";
      }
       myClassTable += "</tr>";
   }
   myClassTable += "</table>";
//In danh sách học viên
 document.write(myClassTable);

//Thêm danh sách 2 học viên và in ra
var newClass = myClass.push("5");


console.log(newClass);

document.write("<br>");
document.write("<br>");

document.write("Danh sách học viên lớp 21PHP01 (bổ sung): <br>");
var newClassTable="<table border=2>";
   for (var y=0; y<newClass.length; y++ ) { // for each row
      newClassTable += "<tr>";
      for (var x=0; x<newClass[y].length; x++ ) { // for each clm
         newClassTable += "<td>" + newClass[y][x] + "</td>";
      }
       newClassTable += "</tr>";
   }
   newClassTable += "</table>";
document.write("<br>" + newClassTable);
