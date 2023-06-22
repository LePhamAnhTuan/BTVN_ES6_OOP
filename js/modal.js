//btn_close

//btn hoc sinh
document.getElementById("btnHocSinh").addEventListener("click", () => {
  document.getElementById("myModalHocSinh").style.display = "block";
});
document
  .getElementById("btnCloseHocSinh")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("myModalHocSinh").style.display = "none";
  });
document.getElementById("thembtnHocSinh").addEventListener("click", (event) => {
  event.preventDefault();
});
//btn nhan vien
document.getElementById("btnNhanVien").addEventListener("click", () => {
  document.getElementById("myModalNhanVien").style.display = "block";
});
document
  .getElementById("btnCloseNhanVien")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("myModalNhanVien").style.display = "none";
  });
document
  .getElementById("thembtnNhanVien")
  .addEventListener("click", (event) => {
    event.preventDefault();
  });
//khach hang
document.getElementById("btnKhachHang").addEventListener("click", () => {
  document.getElementById("myModalKhachHang").style.display = "block";
});
document
  .getElementById("btnCloseKhachHang")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("myModalKhachHang").style.display = "none";
  });
document
  .getElementById("thembtnKhachHang")
  .addEventListener("click", (event) => {
    event.preventDefault();
  });
