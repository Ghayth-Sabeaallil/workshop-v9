import "./ToDo.css"
import { useState } from 'react'

let nextId = 0;


const Add = ({arr}) => {
    return (<>
      {arr.map(list => (
          <li key={list.id} onClick={del}>{list.name}</li>
        ))}
    </>)
}
function del(e){
   e.target.remove();
}

const ToDo = () => {
    const [text, setText] = useState("test");
    const [arr, setArr] = useState([]);
    return (<>
        <div className="todo"><textarea className="text-area" placeholder="Write something here...." onChange={e => setText(e.target.value)} name="text" id="text" rows="1"></textarea>
            <button className="add-btn" onClick={() => {
                arr.push({
                    id: nextId++,
                    name: text,
                });
            }}>Add</button><u><Add arr={arr}></Add></u></div>
    </>)
}

export default ToDo;