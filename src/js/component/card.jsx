import React from "react";
import PropTypes from "prop-types"

export const Cards = (props) => {

return (

<div className="card">
<img src={props.image} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">{props.title}</h5>
  <p className="card-text">{props.text}</p>
<a href={props.link} className="btn btn-primary">{props.buttontext}</a>
</div>
</div>
)

};

Cards.PropTypes = {
   image: PropTypes.string,
   title: PropTypes.string,
   text: PropTypes.string,
   buttontext: PropTypes.string,
   
}

