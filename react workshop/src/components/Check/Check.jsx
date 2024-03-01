import "./Check.css"
import { useState } from 'react'


const Check = () => {
    const [text, setText] = useState("")

    function checkFun() {
        let cat = document.getElementById("cat");
        let dog = document.getElementById("dog");
        if (cat.checked == true && dog.checked == true) {
            setText("Cat and Dog")
        }
       else if (cat.checked == true) {
            setText("Cat")
        }
       else if (dog.checked == true) {
            setText("Dog")
        }
      
        else{
            setText("")
        }
    }

    return (<>
        <div className="check-box">
            <div className="cat">
                <input onClick={checkFun} type="checkbox" id="cat" name="cat" />
                <label htmlFor="cat">Cat</label>
            </div>

            <div className="dog">
                <input onClick={checkFun} type="checkbox" id="dog" name="dog" />
                <label htmlFor="dog">Dog</label>
            </div>
            <p>{text}</p></div>
    </>)
}

export default Check;