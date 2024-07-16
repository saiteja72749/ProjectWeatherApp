import React, { useState } from 'react'
import './Projects.css'

function Weather() {
  const [city,setCity]=useState('')
  const [result,setResult]=useState('')
  const [nullValue,setNullValue]=useState('');

  const submitHandler = e => {
  if(!city){
    setNullValue("please enter the city");
    setResult('');
    return;
  }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then(
      response => response.json()
    ).then(data => {
      const kelvin = data.main.temp
      const celsius = kelvin - 273.15
      setResult(`Temperature at ${city} is ${Math.round(celsius)}°C`) 
      setNullValue("");  
      setCity('') 
      console.log(result);
    }).catch(
      error=>{
        console.log(error)
      }
    )
    e.preventDefault()
  }
  return (
    <div>    
      <center>
         <form onSubmit={submitHandler} className='weather'>
            <h2 className='text'>WeatherApp</h2>
            <label><b>Enter the city: </b></label>
            <input type='text' name='city' value={city} placeholder='enter location' onChange={e=>setCity(e.target.value)}/><br/>
            <br/>
            <b>{nullValue}</b>
            {result && <b>{result}</b>}
            <br/>
            <button type='submit'>submit</button><br/>
            <u><i><b>Note:</b></i></u><> Temperature is displayed in celcius scale.</>
         </form>
         
      </center>
    </div>
  )
}

export default Weather