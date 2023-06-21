import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
// import './Dashboard.css'
import './Dashboard.css'


function Dashboard() {
    const [dataReceived, setDataReceived] = useState("")
    const [copyData, setCopyData] = useState('')
    const [count,setCount] = useState(0)
    const moment = require('moment');
    useEffect(() => {
        let a = JSON.parse(localStorage.getItem("employeeData"))
        setDataReceived(a)
        setCopyData(a)
    setCount(a.length)

    }, [])
    // console.log(dataReceived)

    const onDelete = (id) => {
        let filter = dataReceived.filter((remove) => {
            return remove.id !== id
        })
        // console.log(filter)
        localStorage.setItem("employeeData", JSON.stringify(filter))
        setDataReceived(filter)
    }
    // console.log(count) 

    const onSearch = (e) => {
        const filter = copyData.filter((items) => {
            return (
              items.name.toLowerCase().includes(e.toLowerCase()) ||
              items.email.toLowerCase().includes(e.toLowerCase()) ||
              items.gender.toLowerCase().includes(e.toLowerCase()) ||
              items.designation.toLowerCase().includes(e.toLowerCase()) ||
              items.number.includes(e) ||
              items.id.includes(e)
            )      
          });
        // console.log(filter)
        setDataReceived(filter)
    }
    let navigate = useNavigate()

    return (
        <div className="table_container">
            <Header name="dashboard" />
            <div className="dashboard"><h3>Dashboard</h3></div>
            {/* <div className="zoom-in-out-box">Welcome to Admin Panel</div> */}
            <div className="btn_addemployee">
            <button className="addemployee" onClick={(e) => { navigate('/employeeform') }}>Add Employee</button><br />
            </div>
           
            <div className="displayData">
            <table>
                <tr id="total">
                    <td colSpan={5}></td>
                    <td colSpan={2}>Total count: {count}</td>
                    <td colSpan={3}>Search : <input onChange={(e) => { onSearch(e.target.value) }} /></td>
                </tr>
                <tr>
                    <th>Unique Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Mobile No</th>
                    <th>Designation</th>
                    <th>Gender</th>
                    <th>Course</th>
                    <th>Create Date</th>
                    <th>Action</th>
                </tr>
                {
                    dataReceived && dataReceived.map((item, index) => {
                        return (
                            <tr id="items" key={index}>
                                {/* {console.log(item)} */}
                                <td>{item.id}</td>
                                <td><img src={item.imgInput} /></td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>{item.designation}</td>
                                <td>{item.gender}</td>
                                <td>{item.course}</td>
                                <td>{moment(item.date).format(' DD-MMMM-YYYY')}</td>
                                <td className="btn_group">
                                    <button className="editdelete" onClick={() => { navigate(`/editemployee/${item.id}`) }}>Edit</button>
                                    <button className="editdelete" onClick={(e) => { onDelete(item.id) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }




            </table>
            </div>

            
        </div>
    )
}

export default Dashboard;