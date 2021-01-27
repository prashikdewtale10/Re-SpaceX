import React from 'react'

function Modal({rocket}) {
    return (
<div className="modal fade" id={`popup${rocket.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-md" role="document">
               <div className="modal-content">
                 <div className="modal-header">
                     <h5 className="modal-title text-center" id="exampleModalLabel">{rocket.name}</h5>
                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                            </button>
                  </div>
              <div className="modal-body">


<div id={`carousel${rocket.id}Controls`} className="carousel slide mb-4" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={rocket.flickr_images[0]} alt="First-slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={rocket.flickr_images[1]} alt="Second-slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href={`#carousel${rocket.id}Controls`} role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href={`#carousel${rocket.id}Controls`} role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

<div className="row rocket-info">
    <div className="col-sm-4">
        <h4>Height</h4>
        <p>{rocket.height.feet} Feet</p>
    </div>
    <div className="col-sm-4">
        <h4>Diameter</h4>
        <p>{rocket.diameter.feet} Feet</p>
    </div>
    <div className="col-sm-4">
        <h4>Mass</h4>
        <p>{rocket.mass.kg/1000} Tonne</p>
    </div>
    <div className="col-sm-4">
        <h4>First Flight</h4>
        <p>{rocket.first_flight}</p>
    </div>
    <div className="col-sm-4">
        <h4>Active</h4>
        <p>{rocket.active ? 'Yes' : 'No'}</p>
    </div>
    <div className="col-sm-4">
        <h4>Cost/Launch</h4>
        <p>${rocket.cost_per_launch/1000000} Million</p>
    </div>
</div>
<p>{rocket.description}</p>

          </div>
      <div className="modal-footer">
        <a href={rocket.wikipedia} target="_blank" className="btn btn-primary btn-block">Explore on Wikipedia</a>
      </div>
    </div>
  </div>
</div>
    )
}

export default Modal
