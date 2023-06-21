import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import EmployeeForm from './EmployeeForm/EmployeeForm';
import EditEmployee from './EditEmployee/EditEmployee';
import Login from './Login/Login';
import { useEffect } from 'react';

function App() {
  useEffect(() =>{
    let dataReceived = localStorage.getItem("employeeData")
    // console.log(dataReceived);
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/employeeform' element={<EmployeeForm/>}></Route>
        <Route path={`/editemployee/:id`} element={<EditEmployee/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
