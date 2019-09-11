import React from "react";

const NasaCard = props =>{
    console.log(props.title);
    return (
        <div className="nasa-card">
            <h2 className='nasa-header'>{props.title}</h2>
            <img src={props.url} className='nasa-pic' alt="random NASA photograph"></img>
            <p className='nasa-p'>{props.explanation}</p>
            <p className='nasa-p'>{props.copyright}</p>
        </div>
    )
}

export default NasaCard;