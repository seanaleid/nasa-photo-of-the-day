import React, { useState } from "react";
import StyledNavCard from "./StyledNavCard";
import { navigation } from "../../data";
import styled from "styled-components";
import NasaButton from "../StyledButton";

const NavBar = styled.div`
width: 100%;
background-color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
`;

const NavRight = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-left: 400px;
`;


const StyledNavBar = () =>{
    const [navigationState] = useState(navigation);
    console.log(navigationState);
    console.log(useState(navigation));
    return(
        <NavBar>
            <span><img className="App-logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="Nasa logo"/></span>
            <NavRight> 
            {/* {navigationState.map( (link, key) =>(
                <StyledNavCard link={link} key={key}/>
            ))} */}
                <NasaButton>Home</NasaButton>
                <NasaButton>About</NasaButton>
                <NasaButton>Submit</NasaButton>
                <NasaButton>Foundation</NasaButton>
                <NasaButton>Contact</NasaButton>
            </NavRight>
        </NavBar>
    );
}

export default StyledNavBar;