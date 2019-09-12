import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default function NasaGrid() {
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
        <div className="container">
            <div className="entry">
                <NasaCard 
                title={pics.title} 
                url={pics.url} 
                explanation={pics.explanation} 
                copyright={pics.copyright}/>
            </div>
        </div>
    );
};

