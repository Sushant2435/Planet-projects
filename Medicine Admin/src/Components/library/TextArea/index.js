import "./style.css";

const TextArea=({text, style})=>{
    return(
        <textarea className="text_area_input" style={style}>{text}</textarea>
        
    )
}


export default TextArea;