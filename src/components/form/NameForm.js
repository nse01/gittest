// 2022.02.21.
import React,{useState} from "react";

export default function NameForm () {

    const [nameValue, setNameValue] = useState("");

    const handleChang = (e) => {
        setNameValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //early return
        if(nameValue.length===0) {
            
            return alert('이름을 입력해주세요.');

        }
        return alert('submit : '+nameValue);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name : <input type="text" onChange={handleChang} value={nameValue}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}