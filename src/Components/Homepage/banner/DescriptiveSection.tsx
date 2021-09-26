export  interface desc{
    name : string
    location :string
    description :string
    price : number
}

const DescriptiveSection =( Idata : desc)=>{
    return (
        <div className="secrip-sec m-auto">
            <div>
          
            </div>
          <div>
          <h1 className="promo">{ Idata.name}</h1>
          <img src="https://fontmeme.com/permalink/210926/ad2f84081616b3585a8fe73c6995e776.png" 
              alt="outline-fonts"  className="img-fluid"/>
            <p>{Idata.description}</p>
            <h6>{Idata.price}</h6>
            <h3>{Idata.location}</h3>
          </div>
         
        </div>
    )
}

export default DescriptiveSection
