import DanhSach from "../js/DanhSach.js";
import { person, studen, employee, customer } from "../js/PhanLoaiDanhSach.js";
let danhSach = new DanhSach();

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
      let getElement = document.querySelectorAll(
        "#form-1 input,#form-1 select, #form-1 textarea"
      );
      if (idBtn == "btnHocSinh") {
        let hocSinh = new studen();
        for (let item of getElement) {
          let { value, id } = item;
          hocSinh[id] = value;
        }
        danhSach.themDanhSach(hocSinh);
      } else if (idBtn == "btnNhanVien") {
        let nhanVien = new employee();
        for (let item of getElement) {
          let { value, id } = item;
          nhanVien[id] = value;
        }
        danhSach.themDanhSach(nhanVien);
      }
      console.log(danhSach);
      danhSach.renderGiaoDien();
    });
}
