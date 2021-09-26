export  interface desc{
    name : string
    location :string
    description :string
    price : number
}

const DescriptiveSection =( Idata : desc)=>{
    return (
        <div>
            <h1>{ Idata.name}</h1>
            <p>{Idata.description}</p>
            <h6>{Idata.price}</h6>
            <h3>{Idata.location}</h3>
         
        </div>
    )
}

export default DescriptiveSection
