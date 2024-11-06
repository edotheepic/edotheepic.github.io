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
        <div className="flex flex-col w-3/4 py-10 text-4xl sm:text-5xl md:text-3xl xl:text-5xl 2xl:text-6xl tracking-wider font-mono overflow-clip">

            <Typewriter 
                text={"Hello,\nI am\nEduardo\nBrilliandy"}
            />

        </div>
    )
};
