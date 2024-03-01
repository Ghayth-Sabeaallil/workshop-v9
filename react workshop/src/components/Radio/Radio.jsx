import "./Radio.css"
import { useState } from 'react'


const Radio = () => {
    const [text, setText] = useState("")
    function radioFun() {
        let radio1 = document.getElementById("text1");
        let radio2 = document.getElementById("text2");
        let text1 = document.getElementById("labelText1");
        let text2 = document.getElementById("labelText2");
        if (radio1.checked == true ) {
            setText(text1.textContent)
        }
       else if (radio2.checked == true) {
            setText(text2.textContent)
        }
    }



    return (<>
        <div className="radio-box">
            <div>
                <input onClick={radioFun} type="radio" id="text1" name="drone" value="text1"  />
                <label id="labelText1">First text</label>
            </div><div>
                <input onClick={radioFun} type="radio" id="text2" name="drone" value="text2"  />
                <label id="labelText2">Second text</label>
            </div>


            <p>{text}</p></div>
    </>)
}

export default Radio;