
import styled from "styled-components";


const NasaButton = styled.button`
width: ${props => (props.primary ? '#200px' : '80px')};
height: ${props => (props.primary ? '80px' : '#20px')};
color: #fff;
// border: 1px solid red; 
background-color: #315a73;
border-radius:15%;
display: flex;
justify-content: center;
font-size: ${props => (props.primary ? '2rem' : '.8rem')};
margin-bottom: ${props => (props.primary ? '10%': null)}
transition: 0.2sec ease-in;
&:hover{
    background-color: #fff;
    color: black;
}
`;

export default NasaButton;