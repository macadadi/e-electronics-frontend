
import Navigationbar from './Components/Landingpage/Navigationbar';
import './App.css';
import HomeGeneral from './Components/Homepage/HomeGeneral';
import Productfooter from './Components/Landingpage/Productfooter';
import Productdetail from './Components/productpage/Productdetail';
import Cartpage from './Components/Cart/Cartpage';
import {useEffect} from 'react'
import { fetchdata } from './features/api/ProductSlice';
import { useAppDispatch } from './app/hooks';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LoginPage from './Components/Account/LoginPage';
import CategoryListPage from './Components/Homepage/CategoryListPage';




function App() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchdata())
  },[])
  return (
    <Router>
  <div className="m-2 mt-0 mb-0 ">
   <Navigationbar />
   <Switch>
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/cart' component={Cartpage} />
    <Route exact path='/category/:name' component={CategoryListPage} />
    <Route exact path='/details/:id' component={Productdetail} />
    <Route exact path="" component={HomeGeneral} />

   </Switch>
   <Productfooter />
    </div>
    </Router>
  
  );
}

export default App;
