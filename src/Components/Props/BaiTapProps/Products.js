import React, { Component } from 'react'
import Carts from './Carts'
import ProductItem from './ProductItem'

export default class Products extends Component {

    //Xác định state
    //+Đặt state tại component
    //_

    arrProduct = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]

    state = {
        productDetail: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },
        gioHang: [
            //{ maSP: 1, tenSP: 'iphone x', gia: 1000, soLuong: 1, hinhAnh: 'https://picsum.photos/200/200' }
        ]
    }

    themGioHang = (spClick) => {
        console.log(spClick, 'spClick');
        //Xử lý setState cho giỏ hàng
        //Bước 1: từ sản phẩm đc click tạo ra sản phẩm giỏ hàng
        let spGioHang = {
            maSP: spClick.maSP,
            tenSP: spClick.tenSP,
            gia: spClick.giaBan,
            soLuong: 1,
            hinhAnh: spClick.hinhAnh
        }
        //Bước 2: xử lý thêm giỏ hàng
        let gioHangCapNhat = [...this.state.gioHang, spGioHang];
        //Kiểm tra xem sản phẩm đã tồn tại trg giỏ hàng chưa
        let index = gioHangCapNhat.findIndex(item => item.maSP === spGioHang.maSP);
        if (index !== -1) {//Kiểm tra trg giỏ hàng có chứa sản phẩm => tăng số lượng
            gioHangCapNhat[index].soLuong += 1;
        } else {
            //Nếu sản phẩm chưa có trg giỏ hàng => đem sản phẩm thêm vào giỏ hàng
            gioHangCapNhat.push(spGioHang);
            //gioHangCapNhat = [...gioHangCapNhat,spGioHang];
        }
        //Bước 3: set lại state sau khi xử lý
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    //Phương thức thay đổi state đặt lại component chứa state
    xoaGioHang = (maSP) => {

        //Tạo ra biến giỏ hàng cập nhật
        let gioHangCapNhat = [...this.state.gioHang];
        //Tìm kiếm phần tử đó trg mảng 
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);
        //Nếu tìm thấy
        if (index !== -1) {
            gioHangCapNhat.splice(index, 1);
        }
        //Cập nhật lại state giỏ hàng sau khi xóa
        this.setState({
            gioHang: gioHangCapNhat
        });
    }

    //Tăng giảm số lượng
    thayDoiSoLuong = (maSP, soLuong) => {
        let gioHangCapNhat = [...this.state.gioHang];

        let spGioHang = gioHangCapNhat.find(spGH => spGH.maSP === maSP);
        //Nếu tìm thấy
        if (spGioHang) {
            spGioHang.soLuong += soLuong;
        }
        if (spGioHang.soLuong < 1) {
            alert('số lượng tối thiểu là 1');
            spGioHang.soLuong -= soLuong;
        }
        //Cập nhật lại giỏ hàng
        this.setState({
            gioHang: gioHangCapNhat
        });
    }

    renderProduct = () => {
        //Từ mảng sản phẩm => tạo giao diện danh sách sản phẩm như yêu cầu
        return this.arrProduct.map((item, index) => {
            return <div className="col-4" key={index}>
                <ProductItem productItem={item} viewDetail={this.viewDetail} themGioHang={this.themGioHang} />
            </div>
        })
    }

    //Hàm xử lý sự kiện cho nút xem chi tiết 
    viewDetail = (itemClick) => {
        console.log('itemClick', itemClick);

        this.setState({
            productDetail: itemClick
        });
    }
    render() {

        let { tenSP, hinhAnh, ram, rom, maSP, manHinh, cameraSau, cameraTruoc, heDieuHanh } = this.state.productDetail;

        return (
            <div className="container">
                <Carts xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} thayDoiSoLuong={this.thayDoiSoLuong} />
                <h1 className="text-center display-4">Danh sách sản phẩm</h1>
                <div className="row">
                    {this.renderProduct()}
                </div>

                <div className="productDetail mt-4">
                    <div className="row">
                        <div className="col-4">
                            <div className="display-4">{tenSP}</div>
                            <img src={hinhAnh} height="400" />
                        </div>
                        <div className="col-8">
                            <div className="display-4">Thông số kỹ thuật</div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Màn hình</th>
                                        <th>{manHinh}</th>
                                    </tr>
                                    <tr>
                                        <th>Hệ điều hành</th>
                                        <th>{heDieuHanh}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera trước</th>
                                        <th>{cameraTruoc}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera sau</th>
                                        <th>{cameraSau}</th>
                                    </tr>
                                    <tr>
                                        <th>RAM</th>
                                        <th>{ram}</th>
                                    </tr>
                                    <tr>
                                        <th>ROM</th>
                                        <th>{rom}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
