import "./Header.css"

const Header = ({ text }) => {
    return (<>
    <div className="header-dev"><header className="header"> <h1>{text}</h1></header></div>
    </>)
}

export default Header;