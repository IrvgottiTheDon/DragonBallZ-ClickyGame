import React from "react";

const tile = ({ id, name, image, handlePicked }) => (
    <div className="col-md-3">
        <div className="imgWrapper">
            <img src={image} alt={name} name={name} onClick={handlePicked} key={id} data-id={id}/>
        </div>
    </div>
)

export default tile;