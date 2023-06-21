import React from "react";
import Header from "../Header/Header";
import './Card.css'

function Card(props) {
    // console.log(props,'from card')
    return (
        <div className="card">
            
            <fieldset>
                {props.value == "addEmployee" && <legend>Create Employee</legend>}
                {props.value == "EditEmployee" && <legend>Edit Employee</legend>}
                <table>
                    <tr>
                        <td >Name</td>
                        <td ><input className="inputCards" type="text" value={props.name} onChange={(e) => { props.setName(e.target.value) }} />
                           
                        </td>
                        <td><span>{props.error.name}</span></td>
                    </tr>
                    <tr>
                        <td >E-Mail</td>
                        <td ><input className="inputCards" value={props.email} onChange={(e) => { props.setEmail(e.target.value) }} /><br />
                        </td>
                        <td> <span>{props.error.email}</span></td>

                    </tr>
                    <tr>
                        <td >Mobile No</td>
                        <td ><input className="inputCards" value={props.number} onChange={(e) => { props.setNumber(e.target.value) }} /><br />
                            
                        </td>
                        <td><span>{props.error.number}</span></td>
                    </tr>
                    <tr>
                        <td >Designation</td>
                        <td>
                            <select onClick={props.selectDesignation}>
                                <option >Select</option>
                                <option value='HR'>HR</option>
                                <option value='Manager'>Manager</option>
                                <option value='sales'>Sales Manager</option>
                            </select>
                            
                        </td>
                        <td><span>{props.error.designation}</span></td>
                    </tr>
                    <tr>
                        <td >Gender</td>
                        <td onChange={props.gendercheck}><input type="radio" name="gender" value='male' />Male<br />
                            <input type="radio" name="gender" value='female' />Female
                            
                        </td>
                        <td><span>{props.error.gender}</span></td>
                    </tr>
                    <tr>
                        <td >Course</td>
                        <td onChange={props.coursecheck}><input type="checkbox" name="course" value='MCA' />MCA <br />
                            <input type="checkbox" name="course" value='BCA' />BCA <br />
                            <input type="checkbox" name="course" value='BSC' />BSC 
                        </td>
                        <td><span>{props.error.course}</span></td>
                    </tr>
                    <tr>
                        <td >Image Upload</td>
                        <td><input type="file" onChange={props.imageChange}/></td>
                        <td><span>{props.error.imgInput}</span></td>
                    </tr>
                </table>
                <div className="btn_submit">
                    <button className="submit">Submit</button>
                </div>
            </fieldset>
        </div>
    )
}

export default Card