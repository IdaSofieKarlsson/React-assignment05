import React from "react";
import { useEffect, useState } from "react";

//skriv "tryCatch" istället för att börja med "try..." och VS Code fyller i allt direkt
//om man behöver en key till API, så skapar man en separat variabel för detta. 
//all info om hur man gör brukar finnas på sidan man hämtar APIn från
//console.log för att se datan som hämtas, klicka på hämtat för att se respektive variabler i objektet. 
//joke.setup , "setup" är en av variablerna i objektet. Putta in dessa var och hur önskat i HTMLn

const API = () => {

    const [joke, setJoke] = useState({});

    const fetchData = async () => {
        try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        setJoke(data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    const generateJoke = () => {
        fetchData();
    };

    return (
    <div>
        <button onClick={generateJoke}>Click for lame joke...</button>
        <p>Setup: {joke.setup}</p>
        <br />
        <p>Punchline: {joke.punchline}</p>
    </div>);
    };

export default API;