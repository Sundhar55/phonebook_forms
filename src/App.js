import { useState } from 'react';
import './App.css';

function PhoneBookForm(){

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const HandleChange =(e) => {
    console.log('change', e.target.value);
  }
  const onSubmit = (e) => {
    console.log('submit')
  }
  return(
    <form onSubmit={(e)=>onSubmit(e)}>
      <input type='text' placeholder='first name' onChange={(e)=> HandleChange(e)}></input>
      <input type='text' placeholder='last name'  onChange={(e)=> HandleChange(e)}></input>
      <input type='button' value='Submit' onSubmit={(e)=>onSubmit(e)}></input>
    </form>
    
  )
}

function App() {
  return (
    <div className="App-Container">
      <header className="App-header">
        PhoneBook Form        
      </header>
      <PhoneBookForm/>
    </div>
    
  );
}

export default App;
