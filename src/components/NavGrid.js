import React, { useState } from "react";
import NavCard from "./NavCard";
import { navigation } from "../../src/data";

const NavBar = () =>{
    const [navigationState] = useState(navigation);
    console.log(navigationState);
    console.log(useState(navigation));
    return(
        <div className="navBar">
            <span><img className="App-logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="Nasa logo"/></span>
            {navigationState.map( (link, key) =>(
                <NavCard link={link} key={key}/>
            ))}
            
        </div>
    );
}

export default NavBar;