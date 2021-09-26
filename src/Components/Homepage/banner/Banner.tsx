import React from 'react'
import Courasol from './Courasol'
import './banner.css'
import DescriptiveSection from './DescriptiveSection'
import { desc } from './DescriptiveSection'


const user : desc= {
name :'You Talked and We Hard You, Get The Best Offer Now',
location :'We have physical stores all over the country',
price : 234,
description :' For Great Job at affordable prices please get intouch with us. We asure you to get the best deal'
}

const Banner  :React.FC =()=> {
    return (
        <div className="row m-2 banner">
            <div className="col-md-6">
                <Courasol />
            </div>
            <div className="col-md-6 ">
                <DescriptiveSection  name={user.name} location={user.location} price={user.price}
                 description={user.description}/>
            </div>
        </div>
    )
}

export default Banner
