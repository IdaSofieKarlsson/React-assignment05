
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function DailyCatItem() {
    

    const [catImage, setCatImage] = useState(null);

    const fetchData = async () => {
        try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();
        setCatImage(data[0]);
        } catch (error) {
        console.error("Error fetching image:", error);
        }
    };

    useEffect(() => {
    fetchData();
    }, []);

    return (
        <div className="weather__details-item">
            
            <div>
                {catImage && (
                <img src={catImage.url} alt="Your daily cat image" />
                )}
            </div>
        </div>
    )
}

export default DailyCatItem;