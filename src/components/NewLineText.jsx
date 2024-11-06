export default function NewLineText({text}) {
    const newText = text.split('\n').map(str => <><div className="basis-full"/><div>{str}</div></>);

    return newText;
};
