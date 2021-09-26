import React from 'react'
import './singleproduct.css'

function Productdetail() {
    return (
        <div className="p-2 m-4">
            <div >
                <div className="row top-row justify-content-center ">
                   <div className="col-md-6 justify-content-center  pp">
                   <div className="img-div text-center mt-2">
                   <img src="https://justmac.com/images/exclusive-sale.png" alt="product"  className="img-fluid"/>
                   </div>
                    </div>
                    <div className="col-md-6">
                        <div className="border-div">
                            <p>11-INCH MACBOOK AIR, MACBOOK AIR</p>
                            <h3>MD711LL/B APPLE MACBOOK AIR “CORE I5″ 1.4Ghz 4GB 128GB SSD 11” (EARLY 2014)</h3>
                        </div>
                        <div>
                        <div className="d-flex justify-content-between col-9 border-div">
                            <h3 style={{color:'blue'}}>Ksh. 1020</h3> <div><button>Add to cart</button></div>
                        </div>
                        <p> Was Ksh. 1500</p>
                        </div>
                        <div className="d-flex justify-content-between col-9 border-div">
                            <p>Warranty</p>
                            <p> 60% discount</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <h4>Description</h4>
                    </div>
                    <div>
                        <h5>Over view</h5>
                        <p>
                        1.5GHz Core i5 processor
4GB of onboard 1600 MHz DDR3 SDRAM
128 GB flash storage
Intel HD Graphics 5000
Integrated FaceTime HD webcam
                        </p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Productdetail
