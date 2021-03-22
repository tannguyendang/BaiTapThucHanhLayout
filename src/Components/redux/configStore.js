import { combineReducers, createStore } from 'redux';

const stateDefault = {
    gioHang: [
        { maSP: 1, tenSP: 'iphone x', gia: 1000, soLuong: 1, hinhAnh: 'https://picsum.photos/200/200' }
    ]
}
const rootReducer = combineReducers({
    //Nơi chứa toàn bộ state của ứng dúng
    gioHangReducer: (state = stateDefault) => {
        return state;
    }
    //stateA: () => ()


})

export const store = createStore(rootReducer);