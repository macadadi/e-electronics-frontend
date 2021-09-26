
import Navigationbar from './Components/Landingpage/Navigationbar';
import './App.css';
import HomeGeneral from './Components/Homepage/HomeGeneral';
import Productfooter from './Components/Landingpage/Productfooter';
import Productdetail from './Components/productpage/Productdetail';


function App() {
  return (
    <div className="m-2 mt-0 mb-0 ">
   <Navigationbar />
   {/* <HomeGeneral /> */}
   <Productdetail />
   <Productfooter />
    </div>
  );
}

export default App;
