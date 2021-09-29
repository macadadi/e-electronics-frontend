import { useState } from 'react'
import './Navstyle.css'
import {Link} from 'react-router-dom'
function Navigationbar() {
    const[menu,setMenu] = useState(false)
    return (
        <div>
            <div className=" col-sm-12 justify-content-between p-2 nav-menu sticky-top">
               
             <div>
             <div className="home">
              <label>Home</label>
              </div>
             </div>
                <div className="w-70 right-section col-sm-7  " style={{top:`${menu ? '40px' :'-2000px'}`}}>
              <Link to="/" > <label onClick={e=>setMenu(!menu)}>Phones</label> </Link> 
              <Link to="/details" >  <label onClick={e=>setMenu(!menu)}>Laptops</label> </Link> 
              <Link to="/details" >  <label onClick={e=>setMenu(!menu)}>Tvs</label> </Link> 
              <Link to="/cart" >  <label onClick={e=>setMenu(!menu)}>Cart</label> </Link> 
              <Link to="/login" >  <label onClick={e=>setMenu(!menu)}>Login</label> </Link> 
                </div>
             
             <div className="menu-btn">
              <button onClick={e=>setMenu(!menu)}>{menu ? 'Close' : 'Open'}</button>
              </div>
            
               
            </div>
        </div>
    )
}

export default Navigationbar
