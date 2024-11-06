import { useEffect, useState } from "react"
import Typewriter from "./Typewriter";

export default function Name(params) {
    
    const [cursorVis, setCursorVis] = useState(true);

    useEffect(() => {
        const id = setInterval(() => {
            setCursorVis(!cursorVis);
        }, 1000);
        return () => clearInterval(id);
    });

    return(
        <div className="flex flex-col w-3/4 pt-10 text-6xl tracking-wider font-mono">

            <Typewriter 
                text={"Hello,\nI am\nEduardo\nBrilliandy"}
            />

        </div>
    )
};
