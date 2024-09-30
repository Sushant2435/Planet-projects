import "./style.css";


const Table =({header , body })=>{
    return (
        <table className="table_container">
            <thead>
                <th>{header}</th>
            </thead>
            <tbody>
                <td>{body}</td>
            </tbody>
        </table>
    )
}

export default Table;