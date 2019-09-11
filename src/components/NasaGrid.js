import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default function NasaGrid() {
    const [pics, setPics] = useState([]);

    useEffect(() =>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response =>{
                console.log("Nasa API data", response);
            })
            .catch(err =>{
                console.log(`Couldn't get the requested data!`, err);
            })
    }, []);
    
    return (
        <p>Something here!</p>
    );
};

