// 2022.02.21.
import React,{useState} from "react";

export default function TextareaForm () {

    const [textareaValue, setTextareaValue] = useState("test")

    const handleChang = (e) => {
        setTextareaValue(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        //early return
        if(textareaValue.length === 0) {
        
            return alert('입력해주세요.');
        }

        return alert('submit : '+ textareaValue)

        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <div>Essay : </div>
                    <textarea onChange={handleChang} value={textareaValue}>{textareaValue}</textarea>
                </label>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}