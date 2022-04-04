import React,{useState} from "react";

export default function Fahrenheit (props) {
    
    const {temperatureF,temperatureC} = props;
    const [tempVal,setTempVal] = useState();

    
    const onChangeInput = (e) => {
        
        setTempVal(e.target.value);
       
    }
    const toFahrenheit = (c) => {
        return (c * 9 / 5) + 32;
    }
   
    const onlyNumber = (e) => {
        // keyCode 값이 0만 반환하여 which 사용
        // Firefox에서 keyCode 속성은 onkeypress 이벤트에서 작동하지 않습니다(0만 반환). 
        // 브라우저 간 솔루션의 경우 which 속성을 keyCode와 함께 사용하십시오
        //Early Return
        if(e.which <=47){
            return e.preventDefault(); 
        }
        if(e.which >=58){
            return e.preventDefault(); 
        }
    }

    const changeValue = () => {
        if(!temperatureF){
            return tempVal;
        }
        if(temperatureC === undefined){
            return ''
        }
        return temperatureF
    }
    return(
        <div style={{margin:'10px 0'}}>
            Fahrenheit : 화씨
            <fieldset>
                <legend>Enter temperature in Fahrenheit</legend>
                <input type='text'
                 onChange={onChangeInput} onKeyPress={onlyNumber}
                 value={changeValue()}/> 
                 <span> 섭씨 : {temperatureC}</span>
            </fieldset>
        </div>
    )
}