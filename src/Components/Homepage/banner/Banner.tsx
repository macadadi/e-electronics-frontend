import React from 'react'
import Courasol from './Courasol'
import './banner.css'
import DescriptiveSection from './DescriptiveSection'
import { desc } from './DescriptiveSection'


const user : desc= {
name :'Adadi',
location :'kisumu',
price : 234,
description :' A very nice man'
}

const Banner  :React.FC =()=> {
    return (
        <div className="row m-2 banner">
            <div className="col-md-6">
                <Courasol />
            </div>
            <div className="col-md-6 bg-info">
                <DescriptiveSection  name={user.name} location={user.location} price={user.price}
                 description={user.description}/>
            </div>
        </div>
    )
}

export default Banner
