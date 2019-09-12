import React, { useState } from "react";
import StyledNavCard from "./StyledNavCard";
import { navigation } from "../../data";
import styled from "styled-components";

const NavBar = styled.div`
width: 100%;
background-color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
`;

const StyledNavBar = () =>{
    const [navigationState] = useState(navigation);
    console.log(navigationState);
    console.log(useState(navigation));
    return(
        <NavBar>
            <span><img className="App-logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="Nasa logo"/></span>
            <div className='nav-right'> 
            {navigationState.map( (link, key) =>(
                <StyledNavCard link={link} key={key}/>
            ))}
            </div>
        </NavBar>
    );
}

export default StyledNavBar;