import React from 'react';
import '../App.scss';


function Bloc(props) {
    return (
        <div className="Bloc">
            <img src= {props.data.img} alt="" srcset="" className="img-card"/>
            <div className="text-card">
                <h2>{props.data.auteur} le {props.data.date} : </h2>
                <p>{props.data.fact}</p>
            </div>
        </div>
    )
}

export default Bloc
