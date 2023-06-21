import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import './EditEmployee.css'
function EditEmployee() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [gender, setGender] = useState('')
    const [course, setCourse] = useState('')
    const [designation, setDesignation] = useState('')
    const [imgInput, setImgInput] = useState('')
    const [error, setError] = useState({})
    const [date, setDate] = useState('')

    const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    const regexExp = /^[6-9]\d{9}$/

    let navigate = useNavigate()
    let { id } = useParams()
    let dataReceived = JSON.parse(localStorage.getItem('employeeData'))
    useEffect(() => {
        dataReceived && dataReceived.map((item, index) => {
            if (item.id === id) {
                setName(item.name)
                setEmail(item.email)
                setNumber(item.number)
                setGender(item.gender)
                setCourse(item.course)
                setDesignation(item.designation)
                setImgInput(item.imgInput)
                setDate(item.date)
            }
        })
    },[])
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

        let updatedData = {
            name: name,
            email: email,
            number: number,
            designation: designation,
            gender: gender,
            course: course,
            imgInput: imgInput,
            id: id,
            date: date
        }
        console.log(dataReceived);
        console.log(updatedData);
        let index = dataReceived.findIndex((find) => find.id === id)
        dataReceived[index] = updatedData
        localStorage.setItem("employeeData", JSON.stringify(dataReceived))
        navigate('/dashboard')
    }
    const validate = () => {
        const error = {}

        if (name === '') {
            error.name = 'Enter your name'
        }
        else if (name.length < 5) {
            error.name = 'enter alteast 5 characters'
        }
        if (email === '') {
            error.email = 'Enter email'
        }
        else if (!emailRegex.test(email)) {
            error.email = "This email is not Valid email"
        }
        if (number === '') {
            error.number = 'Enter your number'
        }
        else if (!regexExp.test(number)) {
            error.number = 'This number is not valid'
        }
        if (designation === '') {
            error.designation = 'Enter designation'
        }
        if (gender === '') {
            error.gender = 'enter gender'
        }
        if (course === '') {
            error.course = 'enter course'
        }
        if (imgInput === '') {
            error.imgInput = 'upload image'
        }
        return error
    }

    const imageChange =(e)=>{
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload =()=>{
            setImgInput(reader.result)
        }
        reader.onerror = error =>{
             console.log("Error", error)
        }
    }

    return (
        <div>
            <Header name="editEmployee"/>
            <div className="edit"><h3>Employee</h3></div>
            <form onSubmit={handleform}>
                <Card value="EditEmployee" name={name} setName={setName} email={email} setEmail={setEmail}
                    number={number} setNumber={setNumber} gender={gender} setGender={setGender}
                    course={course} setCourse={setCourse} designation={designation} setDesignation={setDesignation}
                    error={error} setError={setError} selectDesignation={selectDesignation} gendercheck={gendercheck} 
                    coursecheck={coursecheck} imageChange={imageChange}/>
            </form>
        </div>
    )
}

export default EditEmployee