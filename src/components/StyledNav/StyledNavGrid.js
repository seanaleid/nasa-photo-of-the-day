import React, { useState } from "react";
import StyledNavCard from "./StyledNavCard";
import { navigation } from "../../data";

const StyledNavBar = () =>{
    const [navigationState] = useState(navigation);
    console.log(navigationState);
    console.log(useState(navigation));
    return(
        <div className="navBar">
            <span><img className="App-logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="Nasa logo"/></span>
            <div className='nav-right'> 
            {navigationState.map( (link, key) =>(
                <StyledNavCard link={link} key={key}/>
            ))}
            </div>
        </div>
    );
}

export default StyledNavBar;