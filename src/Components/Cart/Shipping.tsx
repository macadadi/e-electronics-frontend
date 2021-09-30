const Shipping = () => {
    return (
        <div className="">
           <div className="text-center bg-info">
               <h5>Shipping && Payment Details</h5>
           </div>
           <div>
            <div className="d-flex justify-content-between mb-3">
                <div className="d-flex city">
                        <label>Street</label>
                        <input type="text" />
                </div>
                <div className="d-flex city">
                        <label>Country</label>
                        <input type="text" />
                </div>
            </div>
         
            <div className="d-flex justify-content-between mb-3">
                <div className="d-flex city">
                        <label>City</label>
                        <input type="text" className=""/>
                </div>
                <div className="d-flex city">
                        <label>Phone No</label>
                        <input type="text" />
                </div>
            </div>
           </div>
        </div>
    )
}

export default Shipping
