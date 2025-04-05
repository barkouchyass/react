import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Alexandre",
        role: "Designer",
        img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg"
      },
      {
        id: 2,
        name: "Sophie",
        role: "Project Manager",
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
      },
      {
        id: 3,
        name: "Julien",
        role: "Data Analyst",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      },
      {
        id: 4,
        name: "Clara",
        role: "Product Manager",
        img: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg"
      },
      {
        id: 5,
        name: "Luca",
        role: "Marketing Specialist",
        img: "https://images.pexels.com/photos/2083751/pexels-photo-2083751.jpeg"
      },
      {
        id: 6,
        name: "Emma",
        role: "Content Writer",
        img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg"
      },
      {
        id: 7,
        name: "Daniel",
        role: "UX/UI Designer",
        img: "https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg"
      },
      {
        id: 8,
        name: "Olivia",
        role: "Software Engineer",
        img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg"
      },
      {
        id: 9,
        name: "Benjamin",
        role: "QA Tester",
        img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
      },
      {
        id: 10,
        name: "Maya",
        role: "Customer Support",
        img: "https://images.pexels.com/photos/2097475/pexels-photo-2097475.jpeg"
      },
      {
        id: 11,
        name: "Zoe",
        role: "HR Manager",
        img: "https://images.pexels.com/photos/1642161/pexels-photo-1642161.jpeg"
      }
    ]
  );
  function updateEmployee(id, newName, newRole) {
    const updateEmployees = employees.map((employee)=>{
      if(id == employee.id){
        return{...employee, name:newName, role:newRole};
      }
      return employee;
    });
    setEmployees(updateEmployees);
  }
  function newEmployee(name, role, img) {
    const newEmployee={
      id:uuidv4(),
      name:name,
      role:role,
      img:img
    }
    setEmployees([...employees, newEmployee])
  }
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
        (

          <>
            <input
              type="text"
              onChange={(e) => {
                setRole(e.target.value);
              }} />
            <div className="flex flex-wrap justify-center">
              {employees.map((employee) => {
                return (
                  <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    updateEmployee={updateEmployee}
                  />
                );
              })}
            </div>
            <AddEmployee newEmployee={newEmployee}/>
          </>
        )
        :
        (<p>you cannot see the employees</p>)
      }
    </div>
  );
}

export default App;
