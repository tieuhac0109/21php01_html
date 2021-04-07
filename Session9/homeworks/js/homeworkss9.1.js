function checkYear(month, year) {
	var month = 5;
	var year = 2020;
	if (month = 1, 3, 5, 7, 8, 10, 12) {
		document.write("Tháng x có 31 ngày");
	} else if (month = 4, 6, 9, 11) {
		document.write("Tháng x có 30 ngày");
	} else {
		if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)) {
		document.write("Tháng x có 29 ngày");	
		} else {
				document.write("Tháng x có 28 ngày");
		}
	}
}