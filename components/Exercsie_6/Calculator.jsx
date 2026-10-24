import { useState } from 'react';
import './Calculator.css'

function Calculator () {
    const [value, setValue] = useState('');

const calculate = () => {
  let operator = "";

  if (value.includes("+")) operator = "+";
  else if (value.includes("-")) operator = "-";
  else if (value.includes("*")) operator = "*";
  else if (value.includes("/")) operator = "/";

  if (!operator) return;

  const [num1, num2] = value.split(operator).map(Number);

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
    default:
      result = "Error";
  }

  setValue(result.toString());
};

    return(
        <div className="container componentBox">
            <div className="calculator">
                <form action="">
                    <div className='display'>
                        <input type="text" value={value}/>
                    </div>
                    <div>
                        <input type="button" value="AC" onClick={e => setValue('')} />
                        <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))} />
                        <input type="button" value="." onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="/" onClick={e => setValue(value + e.target.value)} />
                    </div>
                    <div>
                        <input type="button" value="7" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="8" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="9" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="*" onClick={e => setValue(value + e.target.value)} />
                    </div>
                    <div>
                        <input type="button" value="4" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="5" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="6" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="+" onClick={e => setValue(value + e.target.value)} />
                    </div> 
                    <div>
                        <input type="button" value="1" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="2" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="3" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="-" onClick={e => setValue(value + e.target.value)} />
                    </div>
                     <div>
                        <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="=" className='equal'  onClick={calculate} />
                    </div>
                </form>
            </div>
        </div>

    );
};


export default Calculator