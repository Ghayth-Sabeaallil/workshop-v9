import "./List.css";

const List = ({ animals }) => {
    return (
        <>
        <div className="list-dev">
            <ul className="list-box">
                {animals.map((djur) => {
                    return <li key={djur}>{djur}</li>
                })}
            </ul>
            </div>
        </>
    );
};

export default List;
