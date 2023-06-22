import { person, studen, employee, customer } from "../js/PhanLoaiDanhSach.js";
import removeVietnameseTones from "./helper.js";
export default class DanhSach {
  constructor() {
    this.DanhSach = [];
  }
  themDanhSach(item) {
    this.DanhSach.push(item);
  }
  renderGiaoDien() {
    let content = this.DanhSach.map((value) => {
      if (value.diemToan) {
        let hocSinh = new studen();
        Object.assign(hocSinh, value);
        let {
          fullName,
          address,
          maId,
          email,
          diemToan,
          diemLy,
          diemHoa,
          tinhDiemTrungBinh,
        } = hocSinh;

        return `<tr>
        <td>${maId}</td>
        <td>${fullName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td> ${
          "Điểm Toán:" +
          diemToan +
          "<br />" +
          "Điểm Hóa:" +
          diemHoa +
          "<br />" +
          "Điểm Lý:" +
          diemLy +
          "<br />" +
          "Điểm trung bình:" +
          tinhDiemTrungBinh().toFixed(1)
        }</td>
        <td>
                <button id="xoaDanhSach" onclick="xoaDanhSach('${maId}')" class="btn btn-success text-white opacity-75">Xóa</button>
                <button onclick="layThongTin('${maId}')" class="btn btn-danger text-white opacity-75">Sửa</button>
                </td>
                
            </tr> 
        `;
      }
      if (value.ngayLamViec) {
        let nhanVien = new employee();
        Object.assign(nhanVien, value);
        let {
          fullName,
          address,
          maId,
          email,
          ngayLamViec,
          luongTheoNgay,
          tinhLuong,
        } = nhanVien;
        return `<tr>
        <td>${maId}</td>
        <td>${fullName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>
        ${
          ngayLamViec
            ? "Ngày làm việc:" +
              ngayLamViec +
              "<br/>" +
              "Lương theo ngày" +
              luongTheoNgay +
              "<br/>" +
              "Tổng lương" +
              tinhLuong()
            : ""
        } 
        </td>
        <td>
                <button id="xoaDanhSach" onclick="xoaDanhSach('${maId}')" class="btn btn-success text-white opacity-75">Xóa</button>
                <button onclick="layThongTin('${maId}')" class="btn btn-danger text-white opacity-75">Sửa</button>
                </td>
                
            </tr> 
        `;
      }
      if (value.tenCongTy) {
        let khachHang = new customer();
        Object.assign(khachHang, value);
        let { fullName, address, maId, email, tenCongTy, bill, rate } =
          khachHang;
        return `<tr>
        <td>${maId}</td>
        <td>${fullName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>
        ${
          tenCongTy
            ? "Tên công ty:" +
              tenCongTy +
              "<br/>" +
              "Bill:" +
              bill +
              " <br/" +
              "Rate:" +
              rate +
              " <br/"
            : ""
        }
        </td>
        <td>
                <button id="xoaDanhSach" onclick="xoaDanhSach('${maId}')" class="btn btn-success text-white opacity-75">Xóa</button>
                <button onclick="layThongTin('${maId}')" class="btn btn-danger text-white opacity-75">Sửa</button>
                </td>
                
            </tr> 
        `;
      }
      // }
    });
    document.getElementById("tableDanhSach").innerHTML = content.join("");
  }
  luuLocal() {
    localStorage.setItem("arrDanhSach", JSON.stringify(this.DanhSach));
  }
  layLoacal() {
    let getLocal = JSON.parse(localStorage.getItem("arrDanhSach"));

    if (getLocal) {
      this.DanhSach = getLocal;
      this.renderGiaoDien();
    }
  }
  xoaDanhSach(id) {
    let index = this.DanhSach.findIndex((item) => item.maId == id);
    if (index != -1) {
      this.DanhSach.splice(index, 1);
      this.renderGiaoDien();
      this.luuLocal();
    }
  }
  layThongTin(maId) {
    let item = this.DanhSach.find((value) => value.maId == maId);
    if (item.diemToan) {
      document.getElementById("btnHocSinh").click();
      document.getElementById("thembtnHocSinh").style.display = "none";
      document.querySelector("#form-1 input#maId").readOnly = true;

      let getElement = document.querySelectorAll(
        "#form-1 input,#form-1 select, #form-1 textarea"
      );
      for (let input of getElement) {
        let { id } = input;
        input.value = item[id];
      }
    } else if (item.ngayLamViec) {
      document.getElementById("btnNhanVien").click();
      document.getElementById("thembtnNhanVien").style.display = "none";
      document.querySelector("#form-2 input#maId").readOnly = true;

      let getElement = document.querySelectorAll(
        "#form-2 input,#form-2 select, #form-2 textarea"
      );
      for (let input of getElement) {
        let { id } = input;
        input.value = item[id];
      }
    } else if (item.tenCongTy) {
      document.getElementById("btnKhachHang").click();
      document.getElementById("thembtnKhachHang").style.display = "none";
      document.querySelector("#form-3 input#maId").readOnly = true;
      let getElement = document.querySelectorAll(
        "#form-3 input,#form-3 select, #form-3 textarea"
      );
      for (let input of getElement) {
        let { id } = input;
        input.value = item[id];
      }
    }
  }
  chinhSuaThongTin(arrThongTin) {
    let index = this.DanhSach.findIndex(
      (item) => item.maId == arrThongTin.maId
    );
    if (index != -1) {
      this.DanhSach[index] = arrThongTin;
      this.renderGiaoDien();
      this.luuLocal();
    }
  }
  timKiemThongTin = (keyword) => {
    let newkey = removeVietnameseTones(keyword).trim();
    let arrTimKiem = this.DanhSach.filter((item) => {
      let newFullName = removeVietnameseTones(item.fullName);
      return newFullName
        .toLowerCase()
        .trim()
        .includes(newkey.toLowerCase().trim());
    });
    if (arrTimKiem) {
      this.DanhSach = arrTimKiem;
      this.renderGiaoDien();
    }
  };
}
