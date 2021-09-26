import React from 'react'

export interface Iproduct{
 name :string,
 url : string,
 price : number
 category :string
 brand : string
}

function ProductList(catalogue :Iproduct) {
    return (
        <div className="col-md-6 col-lg-4">
        <div className="prod-div mt-2 p-2 m-2 pt-1 prod-list text-center m-auto " >
            <p>{catalogue.category}</p>
            
            <img src={catalogue.url} alt={catalogue.name} />
          
           <h6>{catalogue.name}</h6>
            <h6 style={{color:'blue'}}>Brand {catalogue.brand}</h6>

            <p>Price  <b>Kshs. {catalogue.price}</b></p>
           
        </div>
    </div>
    )
}

export default ProductList
