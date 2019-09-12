import React from "react";
import styled from "styled-components";

const NasaButton = styled.button`
width: 200px;
height: 80px;
// border: 1px solid red; 
background-color: #fff;
border-radius:15%;
display: flex;
justify-content: center;
font-size: 2rem;
margin-bottom: ${props => (props.primary ? '10%': null)}
&:hover{
    background-color: #315a73;
    color: #fff
}
`;

export default NasaButton;
