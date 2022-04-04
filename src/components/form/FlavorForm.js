// 2022.02.21.
import React,{useState} from "react";

export default function FlavorForm () {

    const [selectValue, setSelectValue] = useState('none');

    const handleChang = (e) => {
        setSelectValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(selectValue === "none"){
            return alert('Pick your favorite flavor');
        }

        return alert('submit : '+selectValue)
        
       
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Pick your favorite flavor : 
                    <select onChange={handleChang} value={selectValue}>
                        <option value="none">none</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">lime</option>
                        <option value="coconut">coconut</option>
                        <option value="mango">mango</option>
                    </select>
                </label>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}