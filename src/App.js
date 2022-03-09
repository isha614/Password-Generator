
import React,{useState} from 'react';
import { toast,ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {numbers, upperCaseLetters,lowerCaseLetters,specialCharacters} from './character'
import {COPY_SUCCESS} from './message';
function App() {

  const [password,setPassword]= useState('')
  const [passwordLength,setPasswordLength]=useState(8);
  const [includeUpperCase,setIncludeUpperCase] =useState(false);
  const [includeLowerCase,setIncludeLowerCase]=useState(false);
  const [includeNumbers,setIncludeNumbers]=useState(false);
  const[includeSymbols,setIncludeSymbols]=useState(false);

  const handleGeneratePassword=(e)=>{

    if(!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSymbols)
    {
      notify('Select atleast one option ',true)
    }
    let characterList= ''
    if(includeLowerCase){
      characterList = characterList + lowerCaseLetters
    }
    if(includeUpperCase){

      characterList = characterList + upperCaseLetters
    }
    if(includeNumbers){
      characterList=characterList + numbers
    }

    if(includeSymbols){

      characterList=characterList+specialCharacters
    }
    setPassword(createPassword(characterList))
  }

  const createPassword =(characterList) =>
  {
    let password= ''
    const characterListLength=characterList.length
    for(let i=0;i<passwordLength;i++)
    {
      const characterIndex= Math.round(Math.random()*characterListLength)
      password=password+characterList.charAt(characterIndex)
    }
    return password;
  }

  const copyToClipboard=()=>{
    const newTextArea=document.createElement('textarea');
    newTextArea.innerText=password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()

  }
  const notify=(message,hasError=false)=>{
    if(hasError){
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    else{
      toast(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
      
  }
  const handleCopyPassworrd=(e)=>{
    if(password==='')
    {
      notify('Nothing to copy',true)
    }
    else{
      copyToClipboard()
      notify(COPY_SUCCESS)
    }
   
  }

  
  return (
    <div className="App">
     <div className="container">
       <div className='generator'>
       <h2 className="generator_header">
         Password Generator
       </h2>
       <div className="generator_password">
       <h3>{password} </h3> 
      <button onClick={handleCopyPassworrd}className="copy_btn">
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
onChange={(e)=>setIncludeLowerCase(e.target.checked)}
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

<button onClick={handleGeneratePassword} className="generator_btn">Generate Password</button>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
     </div>
     </div>  
     </div>
  );
}

export default App;
