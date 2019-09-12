import React from "react";

const NavCard = links =>{
    console.log(links);
    
    return (
        <button className="navLinks">
            <span>
                {links.link}
            </span>
        </button>
    );
}

export default NavCard;