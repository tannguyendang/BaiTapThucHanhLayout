import React, { Component } from 'react'
//Kết nối component với store từ redux
import { connect } from 'react-redux';


class GioHangRedux extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} width={50} alt={spGH.gia} /></td>
                <td>{spGH.soLuong}</td>
                <td>{spGH.soLuong * spGH.gia}</td>
                <td><button>Xóa</button></td>
            </tr>
        })
    }
    render() {
        console.log(this.props);
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
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {//ghi chú state chính là rootReducer (state tổng của ứng dúng)
    //Hàm này tạo ra props từ state của redux
    return {
        gioHang: state.gioHangReducer.gioHang
    }
}

//Biến đổi BaiTapGioHangRedux thành BaiTapGioHang có kết nối với redux
export default connect(mapStateToProps)(GioHangRedux);