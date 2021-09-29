import {useEffect,useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Banner from "./banner/Banner"
import ProductCatalogue from "./homebody/ProductCatalogue"
import { Icatalogue } from "./homebody/ProductCatalogue"
import ProductList from "./homebody/ProductList"

interface Iprop<Icatalogue>{
    products : Icatalogue[]
}

function HomeGeneral() {
    // const [products,setProducts] = useState<Iprop<{}>>()
    const good = useAppSelector(state=>state.product)

    const product =[
        {color:"blue",
            category : 'Get it deliverd to your place at no extra cost',
         url : 'https://justmac.com/images/exclusive-sale.png',
        
          action :'Get Refurbished product'},
          {color:'green',category : 'Laptops',
         url : 'https://justmac.com/images/exclusive-sale.png',
        
          action :'Buy Laptops'},
          {color :'pink',category : 'Get Refurbished product',
         url : 'https://justmac.com/images/exclusive-sale.png',
         desc :'The most genuine way to trade your cellphone, laptops and other gadgets online',
          action :'Buy Laptops'}
    ]
    const goods =[
        {color :'pink',category : 'Get Refurbished product',
        url : 'https://justmac.com/images/exclusive-sale.png',
        desc :'The most genuine way to trade your cellphone, laptops and other gadgets online',
         action :'Buy Laptops'},
        {color:"blue",
            category : 'Get it deliverd to your place at no extra cost',
         url : 'https://justmac.com/images/exclusive-sale.png',
        
          action :'Get Refurbished product'},
          {color:'green',category : 'Laptops',
         url : 'https://justmac.com/images/exclusive-sale.png',
        
          action :'Buy Laptops'},
         
    ]
    const goodst =[
        {name :'Washing machine',
        brand : 'Sony',
        url : 'https://justmac.com/images/exclusive-sale.png',
        price : 2456,
         category :'Home appliences'},
         {name :'Washing machine',
         brand : 'Sony',
         url : 'https://justmac.com/images/exclusive-sale.png',
         price : 2456,
          category :'Home appliences'},
          {name :'Washing machine',
          brand : 'Sony',
          url : 'https://justmac.com/images/exclusive-sale.png',
          price : 2456,
           category :'Home appliences'},
           {name :'Washing machine',
           brand : 'Sony',
           url : 'https://justmac.com/images/exclusive-sale.png',
           price : 2456,
            category :'Home appliences'},
            {name :'Washing machine',
            brand : 'Sony',
            url : 'https://justmac.com/images/exclusive-sale.png',
            price : 2456,
             category :'Home appliences'},
      
         
    ]
     console.log(good)
    return (
        <div>
            <Banner />
            <div className="m-2 product-category-div">
                <h1>
                    Product Categories 
                </h1>
                <p>Finest products to acquire</p>
            </div>
            
              <div className="row m-2">
              {product.map((value,index)=> <ProductCatalogue key={index} color={value.color} desc={value.desc} url={value.url} 
                   action={value.action} category={value.category}/>)}
                   
            </div>
            <div className="m-2 product-category-div">
                <h1>
                    Our Top Venders This Month
                </h1>
                <p>Get your products from top rated and verifired vendors</p>
            </div>
            <div className="row m-2">
              {goods.map((value,index)=> <ProductCatalogue key={index} color={value.color} desc={value.desc} url={value.url} 
                   action={value.action} category={value.category}/>)}
                   
            </div>
            <div className="m-2 product-category-div">
                <h1>
                    Products that are on demand this week
                </h1>
                <p>Get your products from top rated and verifired vendors</p>
            </div>

            <div className="row m-2">
           {good.status === 'idle' ? <div>NO data</div> : good.status === 'failed' ?
               <div>Coul not load data </div> : good.product.map((value,index)=><ProductList key={index} catalogue={value}/>)}
                   
            </div>

        </div>
    )
}

export default HomeGeneral
