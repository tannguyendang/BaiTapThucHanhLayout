import React, { Component } from 'react'

export default class SanPhamRedux extends Component {
    render() {

        let productItem = this.props.sanPham;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={productItem.hinhAnh} alt={productItem.tenSP} height="300" />
                    <div className="card-body">
                        <h4 className="card-title">{productItem.tenSP}</h4>
                        <button className="btn btn-success" onClick={() => {
                            this.props.viewDetail(productItem);
                        }}>Xem chi tiết</button>
                        <button className="btn btn-danger" onClick={() => {
                            //Sử dụng hàm thêm giở hàng từ component Products(com Cha) truyền vào
                        }}>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
