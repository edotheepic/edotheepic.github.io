import { useEffect, useState } from "react"
import NewLineText from "./NewLineText";

export default function Typewriter({text}) {

    
    const [currText, setCurrText] = useState('');
    const [currIndex, setCurrIndex] = useState(0);
    
    const cursorIcon = '_';
    const [cursor, setCursor] = useState('_');
    // const [cursorVis, setCursorVis] = useState(true);

    useEffect(() => {
        if(currIndex < text.length){
            const id = setInterval(() => {
                setCurrText((currText) => (currText+text[currIndex]));
                setCurrIndex((currIndex) => (currIndex+1));
            }, 250);

            return () => clearInterval(id);
        }
        else{
            const id = setInterval(() => {
                if(cursor != '') setCursor('');
                else setCursor(cursorIcon)
            }, 1000);
            return () => clearInterval(id);
        }

    },[currIndex, cursor]);

    return(
        <div className="flex flex-wrap">
            <NewLineText text={currText+cursor}></NewLineText>
        </div>
    )
};
