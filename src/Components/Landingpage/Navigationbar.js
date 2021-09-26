import './Navstyle.css'
function Navigationbar() {
    return (
        <div>
            <div className=" col-sm-12 justify-content-between p-2 nav-menu sticky-top">
                <label>Home</label>
                <div className="w-70 right-section col-sm-7  justify-content-around">
                <label>Phones</label>
                <label>Laptops</label>
                <label>Tvs</label>
                <label>Cart</label>
                </div>
            </div>
        </div>
    )
}

export default Navigationbar
