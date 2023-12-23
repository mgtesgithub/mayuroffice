// to perform operation on button click so USE THE STATE HOOK



// import React, { useState } from 'react';
// import './App.css';
// import FunctionCompo from './FunctionCompo';
// import ClassCompo from './ClassCompo';

// function App() {
//   // Use the 'useState' hook to manage state
//   const [data, setData] = useState('Mayur Patil');

//   // Use 'const' for the function to avoid unintended reassignments
//   const apple = () => {
//     // Use the 'setData' function to update the state
//     setData('Vicky');
//     alert(data); // This will show the old value, consider using 'alert' after 'setData'
//   };

//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       {/* <FunctionCompo /> */}
//       {/* <ClassCompo /> */}
//       <button onClick={apple}>Click Me</button>
//       <br />
//       <br />
//       {/* <button onClick={() => alert("This is the HACKER EYE'S")}>Click Me</button> */}
//     </div>
//   );
// }

// export default App;


// =====================================================================================================================================

// React Hooks:-

// import React ,{useState} from 'react'

























// function App() {
//   const [selectcountry, setSelectCountry] = useState('');

//   const data = [
//     {
//       "name": "India",
//       "value": "in",
//       "cities": ["delhi", "gujarat"]
//     },
//     {
//       "name": "Pakistan",
//       "value": "pk",
//       "cities": ["lahore", "karachi"]
//     },
//     {
//       "name": "United Kingdom",
//       "value": "UK",
//       "cities": ["Birmingham", "Boston"]
//     }
//   ];
 

//   data.map(()=>{
//     console.warn("" ,data)
//   })

//   return (
//     <div className="App">
//     <h1>Simple Dropdown</h1>
      


       
//     </div>
//   );
// }

// export default App;


// =======================================================================================================




//   function App() {
//   const [selectedCountry, setSelectedCountry] = useState('');

//   const data = [
//     {
//       "name": "India",
//       "value": "in",
//       "cities": ["delhi", "gujarat"]
//     },
//     {
//       "name": "Pakistan",
//       "value": "pk",
//       "cities": ["lahore", "karachi"]
//     },
//     {
//       "name": "United Kingdom",
//       "value": "UK",
//       "cities": ["Birmingham", "Boston"]
//     }
//   ];

//   const handleCountryChange = (event) => {
//     setSelectedCountry(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="countries">Select a Country: </label>
//       <select id="countries" value={selectedCountry} onChange={handleCountryChange}>
//         <option value="" disabled>Select a country</option>
        
//           {data.map((item, index) => (
//           <option key={index} value={item.value}>{item.name}</option>
//         ))}
//       </select>

//       {selectedCountry && (
//         <div>
//           <label htmlFor="cities">Select a City: </label>
//           <select id="cities">
//             <option value="" disabled>Select a city</option>
//             {data.find(item => item.value === selectedCountry)?.cities.map((city, index) => (
//               <option key={index} value={city}>{city}</option>
//             ))}
//           </select>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



 
