//useEffect() = React Hook that tells React to do some code when : 
//      1. the component mounts - med ", [count] efter function i useEffect()
//      2. the component re-renders
//      3. the state of a value changes - med endast "." efter function i useEffect() - 
//              inte rekommenderat att göra så, inte vanligt att ha ngt running hela tiden
//  useEffect(function, [dependencies])

import React from "react";
import { useEffect, useState } from "react";

const UseEffectExercise = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} - ${color}`;
    }, [color, count]);
    //useEffect lyssnar på och ändrar de variabler man sätter inne i []. Inget i []=inga ändringar i fliktitel. 
    // Ingen [] = lyssnar på allt, hela tiden, inte riktigt bra

    const changeColor = () => {
        setColor(c => c === "green" ? "yellow" : "green");
    };

    return (
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Add</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

export default UseEffectExercise;