import React from "react";

const Listing = (props) => {
    return (
        <div class="card">
                <img src={props.image}></img>
                    <div class="container">
                        <h4><b>{props.listing}</b></h4>
                        <p>{props.location}</p>
                        <p><button><a href={props.link}>Visit</a></button></p>
                    </div>
        </div>
    )
}

export default Listing;