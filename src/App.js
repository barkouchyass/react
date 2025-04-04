
import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
      (
        <>
          <Employee name="yassine" role="intern" />
          <Employee name="omare" role="CEO" />
          <Employee name="youssef"/>
        </>
      )
        :
        (<p>you cannot see the employees</p>)
      }
    </div>
  );
}

export default App;
