// JavaScript Document

//Định nghĩa gọi API
function NhanVienService(){
	//Lấy danh sách Nhân viên từ server
	this.LayDSNhanVien = function(){
		//client request
		axios({
			method: "GET",
			url: "http://5e1a933831118200148f20c1.mockapi.io/NhanVien"
		})
		/*
		.then(function(result){
			//console.log("In", result.data);
		})
		.catch(function(error){
			//console.log("Error IS " + error);
		})
		//console.log("Out");*/
	}
	
	//thêm nhân viên
		this.LayDSNhanVien = function(){
		//client request=
			return axios({
				method: "POST",
				url: "http://5e1a933831118200148f20c1.mockapi.io/NhanVien",
				data: NhanVienMoi, //body
			})
	}
	
	//Xóa nhân viên
	
	//Câp nhập nhân viên
}