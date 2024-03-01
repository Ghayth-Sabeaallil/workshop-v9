import "./RepeatText.css"

/*const ddd = ({ count, text }) => {
    let arr = [];
    for (let i = 1; i <= count; i++) {
        arr.push(<p key={i}>Ghayth</p>);
    }
    return (<>
    <div className="text-box"><span>{arr}</span>
</div>
    </>
    )
}*/
const RepeatText = ({ count, text }) => {
    const ww = Array.from({length : count}, () => (
        <p key={length++}>{text}</p>
    ));

    return (<>
    <div className="text-box" key="key1"><span key="key">{ww}</span></div>
    </>
    )
}

export default RepeatText;

