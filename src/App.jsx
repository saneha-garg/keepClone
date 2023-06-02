/*
import React from 'react';
import Heading from './Heading';

function App() { 
let currDate = new Date();
currDate = currDate.getHours();
let greeting = '';

const cssStyle = { }
if (currDate>=1 && currDate <12){
  greeting = 'Good Morning';
  cssStyle.color = "Green";
} else if (currDate >=12 && currDate <19){
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
}else{
  greeting = "Good Night";
  cssStyle.color = "Black";
}
    return(
<>
  <div>
      <h1>Hello Sir, <span style = {cssStyle}> {greeting} </span> </h1>
   </div>
 </>
);
    }
export default App;
*/


/*
import React ,{useState} from 'react';

const App = () =>{

  const [fullName, setFullName] = useState({
    fname : '',
    lname : '',
    email : '',
    phone : '',
  });
  
  const inputEvent = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name);

    const {value, name} = event.target;

    setFullName((preValue) =>{
     return{
         ...preValue,
         [name]: value,
     }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  }

  return ( 
<>
<div className='main_div'> 
<form onSubmit={onSubmit} > 
<div>
  <h1> HELLO {fullName.fname} {fullName.lname}</h1>
  <input type='text' placeholder='Enter Your First Name' name= 'fname' onChange={inputEvent} value={fullName.fname}  />
  <br />
  <input type='text' placeholder='Enter Your Last Name' name= 'lname' onChange={inputEvent} value={fullName.lname} />
  <br />
  <input type='email' placeholder='Enter Your Email ' name= 'email' onChange={inputEvent} value={fullName.email} autoComplete='off' />
  <br />
  <input type='number' placeholder='Enter Your Mobile no.' name= 'phone' onChange={inputEvent} value={fullName.phone}  />
  <br />
  <button type="submit" > Submit </button>
</div>
</form>
</div>
</>
  );
};

export default App;
*/


import React ,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
   setAddItem((preData) => {
    return [...preData, note];
   })
   console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
    oldData.filter((currData, indx) =>{
      return indx !== id;
    })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      { addItem.map((val, index)=>{
        return (
          <Note
             key={index}
             id={index}
             title={val.title}
             content={val.content}
             deleteItem={onDelete}
           />
        );
      })} 
      <Footer />
    </>
  );
};

export default App;