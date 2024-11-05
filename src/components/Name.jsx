import { useEffect, useState } from "react"

export default function Name(params) {
    
    const [cursorVis, setCursorVis] = useState(true);

    useEffect(() => {
        const id = setInterval(() => {
            setCursorVis(!cursorVis);
        }, 1000);
        return () => clearInterval(id);
    });

    return(
        <div className="pt-10">
            <div className="text-6xl">
                Hello, I am
            </div>
            <div>

            </div>

            <div className="flex">
                <div className="text-6xl">
                    Edo
                </div>
                {cursorVis && 
                    <div className="text-6xl">
                        _
                    </div>
                }
            </div>
        </div>
    )
};
