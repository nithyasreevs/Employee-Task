import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom";
import ShortUniqueId from 'short-unique-id';
import Card from "../Card/Card";
import './EmployeeForm.css'
import Header from "../Header/Header";


function EmployeeForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [gender, setGender] = useState('')
    const [course, setCourse] = useState('')
    const [designation, setDesignation] = useState('')
    const [imgInput, setImgInput] = useState("")
    const [error, setError] = useState({})
    const [startDate, setStartDate] = useState(new Date());
    const moment = require('moment');

    //  id = 0
    const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/
    const regexExp = /^[6-9]\d{9}$/
    const uid = new ShortUniqueId({
        dictionary: 'number',
        length: 2
    });

    let navigate = useNavigate()

    const gendercheck = (e) => {
        setGender(e.target.value)
    }
    const coursecheck = (e) => {
        setCourse(e.target.value)
    }
    const selectDesignation = (e) => {
        setDesignation(e.target.value);
    }
    const handleform = (e) => {
          
        e.preventDefault()
        setError(validate())
        let momentDate = moment(startDate).valueOf()
        let employeeData = {
            name: name,
            email: email,
            number: number,
            designation: designation,
            gender: gender,
            course: course,
            imgInput: imgInput,
            id: uid(),
            date: momentDate
        }
        let dataReceived = localStorage.getItem("employeeData")
        // console.log(dataReceived);
        if (name !== '' && email !== '' && emailRegex.test(email) && number !== '' && regexExp.test(number)
            && designation !== '' && course !== '' && gender !== '' && imgInput !== '') {
            if (dataReceived == null) {
                localStorage.setItem("employeeData", JSON.stringify([employeeData]))
            }
            else {
                let arr = JSON.parse(dataReceived)
                console.log(arr)
                arr.push(employeeData)
                localStorage.setItem("employeeData", JSON.stringify(arr))
            }
            navigate('/dashboard')
        }
    }
    const validate = () => {
        const error = {}

        if (name === '') {
            error.name = '*Enter your name'
        }
        else if (name.length < 5) {
            error.name = '*Enter alteast 5 characters'
        }
        if (email === '') {
            error.email = '*Enter email'
        }
        else if (!emailRegex.test(email)) {
            error.email = "**This email is not Valid email"
        }
        if (number === '') {
            error.number = '*Enter your number'
        }
        else if (!regexExp.test(number)) {
            error.number = '**This number is not valid'
        }
        if (designation === '') {
            error.designation = '*Enter designation'
        }
        if (gender === '') {
            error.gender = '*Enter gender'
        }
        if (course === '') {
            error.course = '*Enter course'
        }
        if (imgInput === '') {
            error.imgInput = '*Upload image'
        }
        return error
    }

    const imageChange =(e)=>{
        // console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload =()=>{
            // console.log(reader.result);
            setImgInput(reader.result)
        }
        reader.onerror = error =>{
             console.log("Error", error)
        }
    }

    return (
        <div>
            <Header name="AddEmployee" />
            <form onSubmit={handleform}>
                <Card value="addEmployee" name={name} setName={setName} email={email} setEmail={setEmail}
                    number={number} setNumber={setNumber} gender={gender} setGender={setGender}
                    course={course} setCourse={setCourse} designation={designation} setDesignation={setDesignation}
                     error={error} setError={setError} startDate={startDate}
                    setStartDate={setStartDate} selectDesignation={selectDesignation} gendercheck={gendercheck} 
                    coursecheck={coursecheck} imageChange={imageChange}/>

            </form>
        </div>
    )
}

export default EmployeeForm;