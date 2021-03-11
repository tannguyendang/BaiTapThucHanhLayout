import logo from './logo.svg';
import './App.css';
import DemoFuntion from './Components/DemoComponent/DemoFuntion';
import DemoClass from './Components/DemoComponent/DemoClass';
import CardProduct from './Components/DemoComponent/CardProduct';
import BaiTapLayout1 from './Components/BaiTapLayout1/BaiTapLayout1';
import BT1Header from './Components/BaiTapLayout1/BT1Header';
import BT1Slider from './Components/BaiTapLayout1/BT1Slider';
import Bt1Promotion from './Components/BaiTapLayout1/Bt1Promotion';
import BT1Laptop from './Components/BaiTapLayout1/BT1Laptop';
import BT1ProducList from './Components/BaiTapLayout1/BT1ProducList';
import Databinding from './Databinding/Databinding';
import BT3Content from './Components/BaiTapThucHanhLayout/BT3Content';
import BT3Footer from './Components/BaiTapThucHanhLayout/BT3Footer';
import Styles from './Components/Styles/Styles';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './Components/StateDemo/StateDemo';
import BaiTapChonXe from './Components/StateDemo/BaiTapChonXe';
import RenderWithMap from './Components/RenderWithMap/RenderWithMap';
import BaiTapLayoutMap from './Components/RenderWithMap/BaiTapLayoutMap';
import DanhSachSanPhamProps from './Components/Props/DemoProps/DanhSachSanPhamProps';

function App() {
  return (
    <div className="App"> {/*bg-dark*/}
      {/* <BaiTapLayout1 /> */}
      {/*<Databinding /> */}
      {/* <Styles /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapLayoutMap /> */}
      <DanhSachSanPhamProps />
    </div>
  );
}

export default App;
