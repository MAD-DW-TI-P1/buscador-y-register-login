import React from 'react';
import './invitation.css';

function Invitation(props) {
  return (
    <>
      <div className="card m-4 mx-auto">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <img src={'https://cristinamaser.com/'+props.src} alt={props.name} className="card-img-top" />
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </>
    );
}

export default Invitation;
