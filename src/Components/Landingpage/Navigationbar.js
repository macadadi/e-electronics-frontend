import { useState } from 'react'
import './Navstyle.css'
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
                <label onClick={e=>setMenu(!menu)}>Phones</label>
                <label onClick={e=>setMenu(!menu)}>Laptops</label>
                <label onClick={e=>setMenu(!menu)}>Tvs</label>
                <label onClick={e=>setMenu(!menu)}>Cart</label>
                </div>
             
             <div className="menu-btn">
              <button onClick={e=>setMenu(!menu)}>{menu ? 'Close' : 'Open'}</button>
              </div>
            
               
            </div>
        </div>
    )
}

export default Navigationbar
