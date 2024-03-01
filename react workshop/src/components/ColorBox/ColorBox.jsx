import "./ColorBox.css"
import { useState } from 'react'


let arr = [];
const ColorDiv = () => {
    let style = {
        backgroundColor: "",
    };

    return (<>
        {arr.map((color) => {
            style.backgroundColor = color;
            return <div className="color" key={color} style={{ "backgroundColor": color }}></div>
        })}
    </>)
}


const ColorBox = ({ dataColor }) => {
    const [color, setColor] = useState("");
    arr = dataColor;

    return (<>
        <div className="color-box"><div className="colors"><ColorDiv ></ColorDiv></div>
            <textarea className="colorBox" placeholder="Write color/hex here...." onChange={e => setColor(e.target.value)} name="text" id="color-text" rows="1"></textarea>
            <button className="add-btn" onClick={() => {
                arr.push(color);
            }}>Add Color</button></div>
    </>)
}

export default ColorBox;