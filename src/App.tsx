
import Navigationbar from './Components/Landingpage/Navigationbar';
import './App.css';
import HomeGeneral from './Components/Homepage/HomeGeneral';
import Productfooter from './Components/Landingpage/Productfooter';


function App() {
  return (
    <div className="m-2 mt-0 mb-0 ">
   <Navigationbar />
   <HomeGeneral />
   <Productfooter />
    </div>
  );
}

export default App;
