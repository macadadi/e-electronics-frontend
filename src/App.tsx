
import Navigationbar from './Components/Landingpage/Navigationbar';
import './App.css';
import HomeGeneral from './Components/Homepage/HomeGeneral';
import Productfooter from './Components/Landingpage/Productfooter';
import Productdetail from './Components/productpage/Productdetail';
import Cartpage from './Components/Cart/Cartpage';
import {useEffect} from 'react'
import { fetchdata } from './features/api/ProductSlice';
import { useAppDispatch } from './app/hooks';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import LoginPage from './Components/Account/LoginPage';




function App() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchdata())
  },[])
  return (
    <div className="m-2 mt-0 mb-0 ">
   <Navigationbar />
   <LoginPage />
   {/* <HomeGeneral /> */}
   {/* <Productdetail /> */}
   {/* <Cartpage /> */}
   <Productfooter />
    </div>
  );
}

export default App;
