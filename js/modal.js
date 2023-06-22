//btn_close

//btn hoc sinh
document.getElementById("btnHocSinh").addEventListener("click", () => {
  document.getElementById("myModalHocSinh").style.display = "block";
  document.getElementById("thembtnHocSinh").style.display = "block";
});
document
  .getElementById("btnCloseHocSinh")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("myModalHocSinh").style.display = "none";
    document.querySelector("#form-1 input#maId").readOnly = false;
    document.getElementById("form-1").reset();
  });
document.getElementById("thembtnHocSinh").addEventListener("click", (event) => {
  event.preventDefault();
});
//btn nhan vien
document.getElementById("btnNhanVien").addEventListener("click", () => {
  document.getElementById("myModalNhanVien").style.display = "block";
  document.getElementById("thembtnNhanVien").style.display = "block";
});
document
  .getElementById("btnCloseNhanVien")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("myModalNhanVien").style.display = "none";
    document.querySelector("#form-2 input#maId").readOnly = false;
    document.getElementById("form-2").reset();
  });
document
  .getElementById("thembtnNhanVien")
  .addEventListener("click", (event) => {
    event.preventDefault();
  });
//khach hang
document.getElementById("btnKhachHang").addEventListener("click", () => {
  document.getElementById("myModalKhachHang").style.display = "block";
  document.getElementById("thembtnKhachHang").style.display = "block";
});
document
  .getElementById("btnCloseKhachHang")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("myModalKhachHang").style.display = "none";
    document.querySelector("#form-3 input#maId").readOnly = false;

    document.getElementById("form-3").reset();
  });
document
  .getElementById("thembtnKhachHang")
  .addEventListener("click", (event) => {
    event.preventDefault();
  });
