import React from "react";

const StyledNavCard = links =>{
    console.log(links);
    
    return (
        <button className="navLinks">
            <span>
                {links.link}
            </span>
        </button>
    );
}

export default StyledNavCard;