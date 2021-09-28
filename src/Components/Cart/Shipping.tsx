const Shipping = () => {
    return (
        <div className="">
           <div className="text-center bg-info">
               <h5>Shipping && Payment Details</h5>
           </div>
           <div>
            <div className="d-flex justify-content-between mb-3">
                <div>
                        <label>Country</label>
                        <input type="text" />
                </div>
                <div>
                        <label>City</label>
                        <input type="text" />
                </div>
            </div>
         
            <div className="d-flex justify-content-between mb-3">
                <div >
                        <label>Street</label>
                        <input type="text" className=""/>
                </div>
                <div >
                        <label>Phone No</label>
                        <input type="text" />
                </div>
            </div>
           </div>
        </div>
    )
}

export default Shipping
