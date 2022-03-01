

function App() {
  return (
    <div className="App">
     <div className="container">
       <h2 className="generator_header">
         Password Generator
       </h2>
       <div className="generator_password">
       <h3>Password </h3> 
      <button className="copy_btn">
        <i className='far fa-clipboard'></i>
      </button>
       </div>

       <div className="form-group">

         <label htmlFor="password-strength">Password Strength</label>
        <input type="number" id="password-strength" name="password-strength" max="20" min="10"></input>
       </div>

       <div className="form-group">

<label htmlFor="uppercase-letters">Includes Upper Case Letters</label>
<input type="checkbox" id="uppercase-letters" name="uppercase-letters" max="20" min="10"></input>
</div>
     </div>

     <div className="form-group">

<label htmlFor="lowercase-letters">Includes Lower Case Letters</label>
<input type="checkbox" id="lowercase-letters" name="lowercase-letters" max="20" min="10"></input>
</div>

<div className="form-group">

<label htmlFor="includes-numbers">Includes Numbers</label>
<input type="checkbox" id="includes-numbers" name="include-numbers" max="20" min="10"></input>
</div>

<div className="form-group">

<label htmlFor="includes-symbols">Includes Symbols</label>
<input type="checkbox" id="includes-symbols" name="includes-symbols" max="20" min="10"></input>
</div>

<button className="generator_btn">Generate Password</button>
     </div>
        
    
  );
}

export default App;
