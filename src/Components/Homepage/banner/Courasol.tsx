import React from 'react'

function Courasol() {
    return (
        <div>
    <div className="bd-example ">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
      <li data-target="#carouselExampleCaptions" data-slide-to={1} />
      <li data-target="#carouselExampleCaptions" data-slide-to={2} />
    </ol>
    <div className="carousel-innern">
      <div className="carousel-item active">
        <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" className="d-block" alt="" />
        <div className="carousel-caption d-none ">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" className="d-block" alt="" />
        <div className="carousel-caption d-none ">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" className="d-block" alt="" />
        <div className="carousel-caption d-none ">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

</div>

    )
}

export default Courasol
