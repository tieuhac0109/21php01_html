//Nhóm 1: nhóm số (bao gồm phím . )
//Nhóm 2: phép tính (+ - x : %) và ( )
//Nhóm 3: XÓA (AC)
//Nhóm 4: dấu bằng

//2 phím đặc biệt: % = 
// Quy ước nhập phép tính: bấm + rồi đến - là -
// Quy ước %: khi bấm % thì trước đó phải là phép tính dạng a/b ngược lại là 0
// Quy ước ưu tiên: 1 (); 2 (x :); 2 (+ -)
// Quy ước cùng ưu tiên: ưu tiên bên trái sang phải


//Object kết quả
var ketqua = document.getElementById('ketqua');

//Vừa bấm phép tính
var doi_phep_tinh = false;

//Số phép tính ưu tiên tìm thấy
var uu_tien = 0;

//Mảng ghi nhớ các số hạng
var mang_so_index = 0;
var mang_so = new Array ();

//Mảng ghi nhớ phép tính
var mang_pt_index = 0;
var mang_pt = new Array ();

//Nội dung đang có
var str_ketqua = '';

//Phím mới
var phim_moi = '';


//******Cài đặt sự kiện******

function ClickButton(obj) {

	//chuỗi hiện tại của kết quả
	if (str_ketqua == '' && phim_moi == '') {
		str_ketqua = ketqua.value;
	}
	if (str_ketqua == '0') {
		str_ketqua = '';
	}

	//HTML của phím bấm
	var type = obj.innerHTML;

	//Nhóm 1 số
	if (	type == '(' ||
			type == ')' ||
			type == '0' ||
			type == '1' ||
			type == '2' ||
			type == '3' ||
			type == '4' ||
			type == '5' ||
			type == '6' ||
			type == '7' ||
			type == '8' ||
			type == '9' ||
			type == '.' ) {
		doi_phep_tinh = false;
		//Thay đổi hiển thị
		phim_moi += type;
		ketqua.value = str_ketqua + phim_moi;
	} else if (	type == '(' ||
				type == ')' ||
				type == '+' ||
				type == '-' ||
				type == 'x' ||
				type == '&divide;' ) {
			//Trước đó đã có 1 phép tính
			if (doi_phep_tinh) {
				mang_pt[mang_pt_index-1] = type;
				//Xử lý hiển thị
				ketqua.value = ketqua.value.substring(0,ketqua.value.length-1) + type;
			}
			//Chưa có phép tính
			else {
				mang_so[mang_so_index] = parseFloat(phim_moi);
				mang_so_index++;
				mang_pt[mang_pt_index] = type;
				mang_pt_index++;
				//Xử lý hiển thị
				ketqua.value = ketqua.value + type;
			}
			//Ghi nhớ đã bấm phím phép tính
			doi_phep_tinh = true;
			//Đổi giá trị 2 chuỗi cơ bản về rỗng
			str_ketqua = '';
			phim_moi = '';
	}
}