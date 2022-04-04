
import NameForm from './components/form/NameForm';
import TextareaForm from './components/form/TextareaForm';
import FlavorForm from './components/form/FlavorForm';
import Celsius from './components/temperature/Celsius';
import Fahrenheit from './components/temperature/Fahrenheit';

function App() {
  return (
    <div style={{margin:'30px'}}>
      <div>Form TEST</div>
      <br/>
      NameForm
      <NameForm />
      <br/>
      TextareaForm
      <TextareaForm />
      <br/>
      FlavorForm
      <FlavorForm />
      <hr style={{margin:'50px 0'}}/>
      TemperatureContainer : 주어진 온도에서 물의 끊는 여부를 추정하는 온도계산기
      <Celsius />
      {/* <Fahrenheit /> */}
    </div>
  );
}

export default App;
