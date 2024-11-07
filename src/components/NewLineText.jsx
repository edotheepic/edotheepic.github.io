export default function NewLineText({text}) {

    return(
        <div>
            {text.split('\n').map((str, index) => (
                <div key={index}>
                    <div>{str}</div>
                </div>
            ))}
        </div>
    )
};
