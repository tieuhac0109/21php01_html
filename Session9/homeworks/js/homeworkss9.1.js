function checkYear(month, year) {
	var month = 5;
	var year = 2020;
	if (month = 1 || month = 3 || month = 5 || month = 7 || month = 8 || month = 10 || month = 12) {
		document.write("Tháng x có 31 ngày");
	} else if (month = 4 || month = 6 || month = 9 || month = 11) {
		document.write("Tháng x có 30 ngày");
	} else {
		if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)) {
		document.write("Tháng x có 29 ngày");	
		} else {
				document.write("Tháng x có 28 ngày");
		}
	}
}

