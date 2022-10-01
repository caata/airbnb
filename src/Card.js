import React from "react";



export default function Card(props){



    return (
        <div className="cardDiv">
            <img src={`images/${props.item.coverImg}`} className="cardImg"/>
            <div>
                <img className="cardStar" src="images\star.png"/>
                <span className="cardRateing">{props.item.stats.rating}</span>
                <span className="cardReviews">({props.item.stats.reviewCount}) • </span>
                <span className="cardCountry">{props.item.location}</span>
            </div>
            <p className="cardDesc">{props.item.title}</p>
            <p className="cardPrice"><bold>From ${props.item.price} /</bold> person</p>
            
        </div>
    )




}


