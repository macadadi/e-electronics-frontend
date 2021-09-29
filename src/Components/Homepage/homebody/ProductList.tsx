import React from 'react'



const ProductList =({catalogue} :any )=> {
    return (
        <div className="col-md-6 col-lg-4">
        <div className="prod-div mt-2 p-2 m-2 pt-1 prod-list text-center m-auto " >
            <p>{catalogue.category}</p>
            
            <img src={'https://justmac.com/images/exclusive-sale.png'} alt={catalogue.name} />
          
           <h6>{catalogue.name}</h6>
            <h6 >Brand  <span style={{color:'blue'}}> {catalogue.brand}</span></h6>

            <p>Price  <b>Kshs. {catalogue.price}</b></p>
           
        </div>
    </div>
    )
}

export default ProductList
