import DanhSach from "../js/DanhSach.js";
import { person, studen, employee, customer } from "../js/PhanLoaiDanhSach.js";
let danhSach = new DanhSach();
danhSach.layLoacal();
const buttonContainer = document.getElementById("phanLoaiDanhSach");
const buttons = buttonContainer.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
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
document
  .getElementById("btnCapNhatHocSinh")
  .addEventListener("click", (event) => {
    event.preventDefault();
    let hocSinh = new studen();
    let getElement = document.querySelectorAll(
      "#form-1 input,#form-1 select, #form-1 textarea"
    );
    for (let item of getElement) {
      let { value, id } = item;
      hocSinh[id] = value;
    }
    danhSach.chinhSuaThongTin(hocSinh);
    document.getElementById("btnCloseHocSinh").click();
    document.getElementById("form-1").reset();
  });
document
  .getElementById("btnCapNhatNhanVien")
  .addEventListener("click", (event) => {
    event.preventDefault();
    let nhanVien = new employee();
    let getElement = document.querySelectorAll(
      "#form-2 input,#form-2 select, #form-2 textarea"
    );
    for (let item of getElement) {
      let { value, id } = item;
      nhanVien[id] = value;
    }
    danhSach.chinhSuaThongTin(nhanVien);
    document.getElementById("btnCloseNhanVien").click();
    document.querySelector("#form-2 input#maId").readOnly = false;
    document.getElementById("form-2").reset();
  });
document
  .getElementById("btnCapNhatKhachHang")
  .addEventListener("click", (event) => {
    event.preventDefault();
    let khachHang = new customer();
    let getElement = document.querySelectorAll(
      "#form-2 input,#form-2 select, #form-2 textarea"
    );
    for (let item of getElement) {
      let { value, id } = item;
      khachHang[id] = value;
    }
    danhSach.chinhSuaThongTin(khachHang);
    document.getElementById("btnCloseKhachHang").click();
    document.getElementById("form-3").reset();
  });

window.xoaDanhSach = (maId) => {
  danhSach.xoaDanhSach(maId);
};
window.layThongTin = (maId) => {
  danhSach.layThongTin(maId);
};
window.timKiemThongTin = (event) => {
  let value = event.target.value;
  if (value) {
    danhSach.timKiemThongTin(value);
  } else if (value == "") {
    danhSach.layLoacal();
  }

  console.log("value: ", value);
};
