// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const Plus = (num) => {
//     if(num==-2 && count<=1){
//       return
//     }
//     setCount(count + num)
//   }

//   return (
//     <>
//     Count : {count}
//       <button
//         onClick={()=>Plus(1)}
//       >+1</button>
//       <button
//         onClick={()=>Plus(-2)}
//       >-2</button>
//     </>

//   );
// }
//   export default App;
// import React, { useState } from 'react';

// const NameList = () => {
//   const [names, setNames] = useState([]);
//   const [newName, setNewName] = useState({ firstname: "", Age: "" });

//   const handleNameChange = (event) => {
//     setNewName({ ...newName, firstname: event.target.value });
//   };
//   const handleAgeChange = (event) => {
//     setNewName({ ...newName, Age: event.target.value });
//   };

//   const handleAddName = (e) => {
//     e.preventDefault(e);
//     if (newName.firstname ==="" ||newName.Age==="") {
//       return
//     }
//     setNames([...names, newName]);
//     setNewName({firstname:"",Age:""});

//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={newName.firstname}
//           onChange={handleNameChange}
//         />
//         <input
//           type="number"
//           value={newName.Age}
//           onChange={handleAgeChange}
//         />
//         <button onClick={handleAddName}>Add</button>
//       </div>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name.firstname},{name.Age}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NameList;

import React, { useState } from 'react';

const NameList = () => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleDeleteName = (index) => {
  const updatedNames = names.filter((_, i) => i !== index);
  setNames(updatedNames);
   };

  const handleAddName = (e) => {
    e.preventDefault(e);
  
    setNames([...names, newName]);
    setNewName('');

  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newName}
          onChange={handleNameChange}
        />
        
        <button onClick={handleAddName}>Add</button>
      </div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}<button onClick={()=>handleDeleteName(index)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
