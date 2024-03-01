import "./ColorBox.css"


const ColorDiv = ({ dataColor }) => {
    let style = {
        backgroundColor: "",
    };

    return (<>
      {dataColor.map((color) => {
        style.backgroundColor = color;
            return <div className="color" style={{ "backgroundColor": color}}></div>
        })}
    </>)
}


const ColorBox = ({ dataColor }) => {
    return (<>
        <div className="color-box"><ColorDiv dataColor={dataColor}></ColorDiv></div>
    </>)
}

export default ColorBox;