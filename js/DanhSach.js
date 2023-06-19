import { person, studen, employee, customer } from "../js/PhanLoaiDanhSach.js";

export default class DanhSach {
  constructor() {
    this.DanhSach = [];
  }
  themDanhSach = (item) => {
    this.DanhSach.push(item);
  };
  renderGiaoDien = () => {
    let content = this.DanhSach.map((value, index) => {
      let {
        fullName,
        address,
        maId,
        email,
        diemToan,
        diemLy,
        diemHoa,
        tinhDiemTrungBinh,
        tinhLuong,
        ngayLamViec,
        tenCongTy,
        bill,
        rate,
        luongTheoNgay,
      } = value;
      return `<tr>
                <td>${maId}</td>
                <td>${fullName}</td>
                <td>${email}</td>
                <td>${address}</td>
                
              <td>
                ${ngayLamViec ? "Ngày làm việc:" + ngayLamViec + "<br/>" : ""}
                ${
                  luongTheoNgay
                    ? "Lương theo ngày" + luongTheoNgay + "<br/>"
                    : ""
                }
                ${tinhLuong ? "Tổng lương" + tinhLuong() + "<br/>" : ""}
                ${tinhDiemTrungBinh ? tinhDiemTrungBinh() : ""}
                ${tenCongTy ? tenCongTy : ""}
                ${bill ? bill : ""}
                ${rate ? rate : ""}
               </td>

                <td>
                <button onclick="xoaDanhSach(${maId})" class="btn btn-success text-white opacity-75">Xóa</button>
                <button onclick="xoaDanhSach()" class="btn btn-danger text-white opacity-75">Sửa</button>
                </td>
                
            </tr> `;
    });
    document.getElementById("tableDanhSach").innerHTML = content.join("");
  };
  xoaPhanTu = () => {};
}
