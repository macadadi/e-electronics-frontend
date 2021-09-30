import React,{useEffect,useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import { getCategory } from '../../features/api/CategorySlice'
import ProductList from '../Homepage/homebody/ProductList'

interface Iproduct {
    id:number
    name:string
    brand:string
    price:number
    category:string
    description:string
}


function CategoryListPage() {
    const good = useAppSelector(state=>state.category)
    
    let query = window.location.pathname
    
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getCategory(query))
        
    },[query])
    return (
        <div className="p-2 m-4">
            
               <div className="row m-2">
           {good.status === 'idle' ? <div>NO data</div> : good.status === 'failed' ?
               <div>Could not load data </div> : good.product.map((value,index)=><ProductList key={index} catalogue={value}/>)}
                   
            </div>
        </div>
    )
}

export default CategoryListPage
