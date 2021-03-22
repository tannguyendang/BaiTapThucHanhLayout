import React, { Component } from 'react'

export default class Carts extends Component {

    renderGioHang = () => {
        //Lấy dữ liệu từ component cha truyền vào thông qua props
        let { gioHang } = this.props;
        return gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} alt={spGH.tenSP} width="50" /></td>
                <td>{spGH.gia}</td>
                <td>
                    <button className="btn btn-success" onClick={() => {
                        this.props.thayDoiSoLuong(spGH.maSP, -1);
                    }}>-</button>
                    {spGH.soLuong}
                    <button className="btn btn-success" onClick={() => {
                        this.props.thayDoiSoLuong(spGH.maSP, 1);
                    }}>+</button>
                </td>
                <td>{spGH.soLuong * spGH.gia}</td>
                <td><button className="btn btn-danger" onClick={() => {
                    this.props.xoaGioHang(spGH.maSP);
                }}>Xóa</button></td>

            </tr>
        });
    }
    render() {
        return (
            <div className="container">
                <h1 >Giỏ hàng (1)</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã</th>
                            <th>Tên SP</th>
                            <th>Hình ảnh</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành Tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()};
                        {/* <tr>
                            <td>1</td>
                            <td>Iphone</td>
                            <td><img src="https://picsum.photos/200/200" width="50" /></td>
                            <td>1.000</td>
                            <td>1</td>
                            <td>1.000</td>
                            <td><button className="btn btn-danger">Xóa</button></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        )
    }
}
