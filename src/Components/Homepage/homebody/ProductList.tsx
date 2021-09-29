import React,{useState} from 'react'
import { useHistory } from 'react-router'



const ProductList =({catalogue} :any )=> {
    const history = useHistory()
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        e.preventDefault()
        history.push('/details')
     

    }
    return (
        <div className="col-md-6 col-lg-4">
        <div className="prod-div mt-2 p-2 m-2 pt-1 prod-list text-center m-auto " onClick={handleClick} >
            <p>{catalogue.category}</p>
            
            <img src={'https://justmac.com/images/exclusive-sale.png'} alt={catalogue.name} />
          
           <h6>{catalogue.name}</h6>
            <h6 >Brand  <span style={{color:'blue'}}> {catalogue.brand}</span></h6>

            <p>Price  <b>Kshs. {catalogue.price}</b></p>

            <p>Id {catalogue.id}</p>
           
        </div>
    </div>
    )
}

export default ProductList
