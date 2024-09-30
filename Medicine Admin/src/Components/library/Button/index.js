import "./style.css";

const Button =({text , style , onClick})=>{
    return(
            <button className="btn_hover" onClick={onClick} style={style}>{text}</button>
    )
}

export default Button;