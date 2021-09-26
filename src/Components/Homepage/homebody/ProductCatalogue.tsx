import React from 'react'
import './homesec.css'
export interface Icatalogue{
category :string
url:string
desc?:string
action :string
color :string


}

function ProductCatalogue(catalogue : Icatalogue) {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="prod-div p-4 m-2 pt-1" style={{backgroundColor:`${catalogue.color}`}}>
                
                   <h5 className=" text-center ">{catalogue.category}</h5>
                 <div className="d-flex justify-content-center ">
               <div className="catalog-desc">
               {catalogue.desc && catalogue.desc}
               </div>
                <img src={catalogue.url} alt={catalogue.action} className="img-fluid "/>
                 </div>
               <div className="text-center btn-div"> <button className="p-2 m-4">{catalogue.action}</button></div>
            </div>
        </div>
    )
}

export default ProductCatalogue
