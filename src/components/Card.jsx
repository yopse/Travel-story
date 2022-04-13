import React from "react";
import ik from "./images/fiji.jpg";

const Card = (props) => {
  return (
    <div className="card">
     
      <div className="card-image">
           
        <img src={ik} style={{width:"80%", height:"300px", borderRadius:"5px"}} alt="d"></img>
        
      </div>

      <div className="card-data">
           <span className="location--heading">  <i class="fa fa-map-marker mapa" aria-hidden="true"></i>{props.location} </span>
            <span className="country--maps--heading"> view on Google Maps</span>
            <h1 className="location--title">{props.title}</h1>
            <p className="dates">{props.startDate}  {"-"} {props.endDate}</p>
            <p className="site--descr">{props.description}</p>
     </div>
    </div>
  );
};


export default Card;