import React from "react";
import { useEffect, useState } from "react";

//skriv "tryCatch" istället för att börja med "try..." och VS Code fyller i allt direkt
//om man behöver en key till API, så skapar man en separat variabel för detta. 
//all info om hur man gör brukar finnas på sidan man hämtar APIn från
//console.log för att se datan som hämtas, klicka på hämtat för att se respektive variabler i objektet. 
//joke.setup , "setup" är en av variablerna i objektet. Putta in dessa var och hur önskat i HTMLn

const API = () => {

    const [catfact, setCatFact] = useState({});

    const fetchData = async () => {
        try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        setCatFact(data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    const generateCatFact = () => {
        fetchData();
    };

    return (
    <div>
        <button onClick={generateCatFact}>Click for an interesting fact about cats</button>
        <p>{catfact.fact}</p>
    </div>);
    };

export default API;