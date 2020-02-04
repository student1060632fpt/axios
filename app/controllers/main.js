// JavaScript Document

/*
API
-Method: GET/POST/PUT/DELETE (bat buoc)
-link API (bat buoc)
-Data(Body)
-Params: LinkAPI (co truyen them tham so vao)
-Headers: token

*/

var nhanVienService = new NhanVienService();
nhanVienService.LayDSNhanVien()
	.then(function (result){
		'use strict';
		//danh sách tồn tại trong này
		console.log("In", result.data);
		Display(result.data);
	})
	.catch(function(error){
		console.log("Error IS " + error);
	})

//setTimeout(function(){
//	console.log("HELLO");
//}, 1000);

function Display(displayList){
	'use strict';
	console.log("FUCK");
	var content = "";
	var tblDanhSachNguoiDung = document.getElementById("tblDanhSachNguoiDung");
	for (var i = 0; i < displayList.length; i++){
		var nhanVien = displayList[i];
		content = content + `
			<tr>
				<td>${i + 1}</td>
				<td>${nhanVien.taiKhoan}</td>
				<td>${nhanVien.matKhau}</td>
				<td>${nhanVien.hoTen}</td>
				<td>${nhanVien.email}</td>
				<td>${nhanVien.soDT}</td>
				<td>${nhanVien.maLoaiNguoiDung}</td>
				<td>
					<button class="btn btn-danger">Xóa</button>
					<button class="btn btn-warning">Sửa</button>
				</td>
			</tr>
		`;
	}
	var tblDanhSachNguoiDung = document.getElementById("tblDanhSachNguoiDung");
	tblDanhSachNguoiDung.innerHTML = content;
}

function ThemNhanVien(){
	//B1: Lấy thông tin
	var taiKhoan = document.getElementById("TaiKhoan").value;
	var hoTen = document.getElementById("HoTen").value;
	var matKhau = document.getElementById("MatKhau").value;
	var email = document.getElementById("Email").value;
	var sdt = document.getElementById("SoDienThoai").value;
	var loaiND = document.getElementById("loaiNguoiDung").value;
	
	//B2: Tạo đối tượng
	var nhanVienMoi = {
		taiKhoan: taiKhoan,
		hoTen: hoTen,
		matKhau: matKhau,
		email: email,
		sdt: sdt,
		loaiND: loaiND,
	};
	
	//B3: gọi API
	nhanVienService.ThemNhanVien(nhanVienMoi);
	
} 