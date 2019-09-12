import React, { useState } from "react";
import NavCard from "./NavCard";
import { navigation } from "../../data";

const NavBar = () =>{
    const [navigationState] = useState(navigation);
    console.log(navigationState);
    console.log(useState(navigation));
    return(
        <div className="navBar">
            <span><img className="App-logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="Nasa logo"/></span>
            <div className='nav-right'> 
            {navigationState.map( (link, key) =>(
                <NavCard link={link} key={key}/>
            ))}
            </div>
        </div>
    );
}

export default NavBar;