import "./style.css";

const InputField =({ type , style , text , onChange ,placeholder,maxLength})=>{
    return(
        <div className="input_container">
            <input className="input_field" text={text} type={type} style={style} onChange={onChange} placeholder={placeholder} maxLength={maxLength}/>
        </div>
    )   
}

export default InputField;