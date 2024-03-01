import "./DropDown.css"
import { useState } from 'react'

const DropDownOption = ({ data }) => {
    return (<>
        {data.map((cars) => {
            return <option key={cars} className="option" value={cars}>{cars}</option>
        })}
    </>)
}

const DropDown = ({ dataCar }) => {
    const [text, setText] = useState("")

    function set(e) {
        setText(e.target.value);
    }

    return (<>
        <div className="car-list"><select onChange={set} key="drop" className="drop" ><DropDownOption data={dataCar}></DropDownOption></select>
            <p>{text}</p></div>

    </>)
}

export default DropDown;