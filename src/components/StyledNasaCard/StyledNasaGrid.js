import React, {useState, useEffect} from "react";
import StyledNasaCard from "./StyledNasaCard";
import axios from "axios";
import NasaButton from "../StyledButton";
import styled from "styled-components";

const Container = styled.div`
width: 800px;
padding-left: 5%;
padding-right: 5%;
margin: ${props => (props.primary ? '0 auto' : 'null')};
// border: 1px solid red; 
background-color: ${props => (props.primary ? 'lightgrey' : '##ffffff')};
display: flex;
flex-direction: ${props => (props.primary ? 'column' : 'row')};
justify-content: ${props => (props.primary ? 'center' : 'space-evenly')};
align-items: center;
`;



export default function StyledNasaGrid() {
    const [pics, setPics] = useState({});
    // console.log(NasaCard);

    useEffect(() =>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=cyV30cBi4Fp4orZofYJXdd520ulmG3idrClBlyl1`)
        //comment to not get rate limited
            .then(response =>{
                console.log("Nasa API data", response);
                const nasaPics = response.data
                setPics(nasaPics);
                console.log(nasaPics);
            })
            .catch(err =>{
                console.log(`Couldn't get the requested data!`, err);
            })
    }, []);
    
    return (
        <Container primary>
            <div className="entry">
                <StyledNasaCard 
                title={pics.title} 
                url={pics.url} 
                explanation={pics.explanation} 
                copyright={pics.copyright}/>
            </div>
            <Container>
                <NasaButton primary>See More</NasaButton>
                <NasaButton primary>Sign Up!</NasaButton>
                <NasaButton primary>Log In!</NasaButton>
            </Container>
        </Container>
    );
};

