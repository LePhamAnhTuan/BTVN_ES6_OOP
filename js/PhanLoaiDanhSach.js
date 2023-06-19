export { person, studen, employee, customer };
class person {
  constructor(fullName, address, maId, email) {
    this.fullName = fullName;
    this.address = address;
    this.maId = maId;
    this.email = email;
  }
}
class studen extends person {
  constructor(fullName, address, maId, email, diemToan, diemLy, diemHoa) {
    super(fullName, address, maId, email);
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
  }
  tinhDiemTrungBinh = () => {
    return (this.diemToan * 1 + this.diemLy * 1 + this.diemHoa * 1) / 3;
  };
}
class employee extends person {
  constructor(fullName, address, maId, email, ngayLamViec, luongTheoNgay) {
    super(fullName, address, maId, email);
    this.ngayLamViec = ngayLamViec;
    this.luongTheoNgay = luongTheoNgay;
  }
  tinhLuong = () => {
    return this.ngayLamViec * this.luongTheoNgay;
  };
}
class customer extends person {
  constructor(fullName, address, maId, email, tenCongTy, bill, rate) {
    super(fullName, address, maId, email);
    this.tenCongTy = tenCongTy;
    this.bill = bill;
    this.rate = rate;
  }
}
