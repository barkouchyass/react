import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [ 
      {
        name : "yassine", 
        role : "Developper", 
        img :"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg"
      },
      {
        name : "yassine", 
        role : "Developper", 
        img :"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
      },
      {
        name : "yassine", 
        role : "Developper", 
        img :"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      },
      {
        name : "yassine", 
        role : "Developper", 
        img :"https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg"
      },
      {
        name : "yassine", 
        role : "Developper", 
        img :"https://images.pexels.com/photos/2083751/pexels-photo-2083751.jpeg"
      },
      {
        name : "yassine", 
        role : "Developper", 
        img :"https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg"
      },
      {
        name : "yassine", 
        role : "Developper", 
        img :"https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg"
      },
      {
        name : "yassine", 
        role : "Developper", 
        img :"https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg"
      },
      {
        name : "yassine", 
        role : "Developper", 
        img :"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
      },
      {
        name : "yassine", 
        role : "Developper", 
        img :"https://images.pexels.com/photos/2097475/pexels-photo-2097475.jpeg"
      },
      {
        name : "yassine", 
        role : "Developper", 
        img :"https://images.pexels.com/photos/1642161/pexels-photo-1642161.jpeg"
      }

    ]
  ); 
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
        (

          <>
            <input
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
                setRole(e.target.value);
              }} />
            <div className="flex flex-wrap justify-center">
              {employees.map((employee) => {
                return(
                <Employee 
                  key = {uuidv4()}
                  name = {employee.name}
                  role = {employee.role}
                  img = {employee.img}
                  />
                );
              })}
            </div>
          </>
        )
        :
        (<p>you cannot see the employees</p>)
      }
    </div>
  );
}

export default App;
