import CartDetail from "./CartDetail"
import Shipping from "./Shipping"
import './cart.css'

const Cartpage = () => {
    return (
        <div className="m-2">
            <div className="row">
                <div className="col-md-6 ">
                    <CartDetail />
                </div>
                <div className="col-md-6"> 
                    <Shipping />
                </div>
            </div>
        </div>
    )
}

export default Cartpage
