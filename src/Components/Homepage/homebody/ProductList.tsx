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
        <div className="col-md-6 col-lg-3">
        <div className="prod-div p-2 m-2 pt-1" >
            <p>{catalogue.category}</p>
            <h4>{catalogue.name}</h4>
            <img src={catalogue.url} alt={catalogue.name} />
            <h5>{catalogue.brand}</h5>
            <p>{catalogue.price}</p>
           
        </div>
    </div>
    )
}

export default ProductList
