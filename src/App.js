
import React,{useState} from 'react'
import './App.css';
function App() {

  const [password,setPassword]= useState('')
  const [passwordLength,setPasswordLength]=useState(8);
  const [includeUpperCase,setIncludeUpperCase] =useState(false);
  const [includeLowerCase,setIncludeLowerCase]=useState(false);
  const [includeNumbers,setIncludeNumbers]=useState(false);
  const[includeSymbols,setIncludeSymbols]=useState(false);
  return (
    <div className="App">
     <div className="container">
       <div className='generator'>
       <h2 className="generator_header">
         Password Generator
       </h2>
       <div className="generator_password">
       <h3>{password} </h3> 
      <button className="copy_btn">
        <i className='far fa-clipboard'></i>
      </button>
       </div>

       <div className="form-group">

         <label htmlFor="password-strength">Password Length</label>
        <input 
        defaultValue={passwordLength}
        onChange={(e)=>setPasswordLength(e.target.value)}
        type="number" 
        id="password-strength" 
        name="password-strength" 
        max="20" 
        min="10"></input>

       </div>

       <div className="form-group">

<label htmlFor="uppercase-letters">Includes Upper Case Letters</label>
<input
checked={includeUpperCase}
onChange={(e)=>setIncludeUpperCase(e.target.checked)}
type="checkbox"
id="uppercase-letters" 
name="uppercase-letters"
 max="20" 
 min="10"></input>
</div>
     

     <div className="form-group">

<label htmlFor="lowercase-letters">Includes Lower Case Letters</label>
<input 
checked={includeLowerCase}
onChange={(e)=>setIncludeUpperCase(e.target.checked)}
type="checkbox"
 id="lowercase-letters" 
 name="lowercase-letters" 
 max="20" 
 min="10"></input>
</div>

<div className="form-group">

<label htmlFor="includes-numbers">Includes Numbers</label>
<input 
checked={includeNumbers}
onChange={(e)=>setIncludeNumbers(e.target.checked)}
type="checkbox" 
id="includes-numbers"
 name="include-numbers" 
 max="20" 
 min="10"></input>
</div>

<div className="form-group">

<label htmlFor="includes-symbols">Includes Symbols</label>
<input
checked={includeSymbols}
onChange={(e)=>setIncludeSymbols(e.target.checked)}
type="checkbox" 
id="includes-symbols"
name="includes-symbols"
 max="20" 
 min="10"></input>
</div>

<button className="generator_btn">Generate Password</button>

     </div>
     </div>  
     </div>
  );
}

export default App;
