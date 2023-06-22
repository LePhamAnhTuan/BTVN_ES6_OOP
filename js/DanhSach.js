import { person, studen, employee, customer } from "../js/PhanLoaiDanhSach.js";

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
                <button onclick="xoaDanhSach()" class="btn btn-danger text-white opacity-75">Sửa</button>
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
                <button onclick="xoaDanhSach()" class="btn btn-danger text-white opacity-75">Sửa</button>
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
    this.DanhSach = getLocal;
    this.renderGiaoDien();
  }
  xoaDanhSach(id) {
    let index = this.DanhSach.findIndex((item) => item.maId == id);
    console.log("index: ", index);
    if (index != -1) {
      this.DanhSach.splice(index, 1);
      this.renderGiaoDien();
      this.luuLocal();
    }
  }
  layThongTin(id) {}
}
