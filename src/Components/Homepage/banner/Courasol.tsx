import React from 'react'

function Courasol() {
    return (
<div className="bg-courasol">
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzvxnCVFs3WAQAk0arZ_INzRxHmG8DUF-9Q&usqp=CAU" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5>Good get</h5>
    <p>... mac</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4nwHG5NX8TM3LqtUJye3212DUgVOsaB2zw&usqp=CAU" alt="Second slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5>Good keep up</h5>
    <p>... mac</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzvxnCVFs3WAQAk0arZ_INzRxHmG8DUF-9Q&usqp=CAU" alt="Third slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5>Good trial</h5>
    <p>... mac</p>
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

</div>
    )
}

export default Courasol
