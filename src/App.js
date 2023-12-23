 import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  const[data,setdata] = useState();
  const[clickfunc,setclickfunc] = useState();

  function changedata (event){
    setdata(event.target.value)

  }

  function onclick(){
    setclickfunc(data)
  }


  // function getdata(event){
  //   setdata(event.target.value);
  //   setprint(false)
  // }
  
  return (
  
     <div className="App">
      {/* {print ? <h1>{data}</h1> : null}
      <input type="text"   onChange={getdata} />
      <button onClick={()=>setprint(true)}>Print data</button> */}


        <input type="text" value={data}  onChange={changedata}/>
        <br /><br />
        <button className="btn btn-primary" onClick={()=>onclick()}>click</button><br /><br />
        <input type="text"  value={clickfunc}/>

     </div>
    
 

    
  );
}

export default App;
