import React from 'react'

function Card(prop) {
    return (
        <div className="card col-sm-5" key={prop.rocket.id}>
        <img className="card-img-top mt-2" src={prop.rocket.flickr_images[0]}  alt="rockets_name" />
        <div className="card-body">
        <h3 className=" card-title text-dark"> {prop.rocket.name} </h3>
        <p className="text-dark">{prop.rocket.description}</p>
 <a href="index.html" className="btn btn-primary" data-toggle="modal" data-target={`#popup${prop.rocket.id}`}>Explore More</a>
        </div>
        
      </div>
    )
}

export default Card
