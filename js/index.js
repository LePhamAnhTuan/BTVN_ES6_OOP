import DanhSach from "../js/DanhSach.js";
import { person, studen, employee, customer } from "../js/PhanLoaiDanhSach.js";
let danhSach = new DanhSach();
danhSach.layLoacal();
const buttonContainer = document.getElementById("phanLoaiDanhSach");
const buttons = buttonContainer.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  // if(this.innerText)
  buttons[i].addEventListener("click", function () {
    themVaoDanhSach(this.id);
    console.log(this.id);
  });
}
function themVaoDanhSach(idBtn) {
  document
    .getElementById(`them${idBtn}`)
    .addEventListener("click", function (event) {
      event.preventDefault();

      if (idBtn == "btnHocSinh") {
        let hocSinh = new studen();
        let getElement = document.querySelectorAll(
          "#form-1 input,#form-1 select, #form-1 textarea"
        );
        for (let item of getElement) {
          let { value, id } = item;
          hocSinh[id] = value;
        }
        danhSach.themDanhSach(hocSinh);
        danhSach.luuLocal();
        danhSach.renderGiaoDien();
        for (let item of getElement) {
          item.value = "";
        }
        document.getElementById("myModalHocSinh").style.display = "none";
      } else if (idBtn == "btnNhanVien") {
        let getElement = document.querySelectorAll(
          "#form-2 input,#form-2 select, #form-2 textarea"
        );
        let nhanVien = new employee();
        for (let item of getElement) {
          let { value, id } = item;
          nhanVien[id] = value;
        }
        danhSach.themDanhSach(nhanVien);
        danhSach.luuLocal();
        // danhSach.layLoacal();
        danhSach.renderGiaoDien();
        for (let item of getElement) {
          item.value = "";
        }
        document.getElementById("myModalNhanVien").style.display = "none";
      } else if (idBtn == "btnKhachHang") {
        let getElement = document.querySelectorAll(
          "#form-3 input,#form-3 select, #form-3 textarea"
        );
        let khachHang = new customer();
        for (let item of getElement) {
          let { value, id } = item;
          khachHang[id] = value;
        }
        danhSach.themDanhSach(khachHang);
        danhSach.luuLocal();
        danhSach.renderGiaoDien();
        for (let item of getElement) {
          item.value = "";
        }
        document.getElementById("myModalKhachHang").style.display = "none";
      }
    });
}
window.xoaDanhSach = (maId) => {
  danhSach.xoaDanhSach(maId);
};
