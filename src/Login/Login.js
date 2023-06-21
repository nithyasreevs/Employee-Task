import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    let navigate = useNavigate()

    const handlesubmit = (e) => {
        console.log(email, password)
        e.preventDefault()
        // if (email === '' || password === '') {
        //     setError('*Enter E-Mail and Password')
        // }
        // else {
        //     return (navigate('/dashboard'))
        // }
        if(email=='hukumgupta@gmail.com' && password=='hukumgupta'){
            return (navigate('/dashboard'))
        }else{
            setError('*Enter Valid E-Mail and Password')
        }
    }
    return (
        <div className="section">
            <div class="navbar">
                <a href="#home"><h2>Logo</h2></a>

            </div>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handlesubmit}>
                        <h2>LOGIN</h2>
                        <div className="inputbox">
                            <label>E-Mail</label><br />
                            <Input size="large" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="E-mail" prefix={<UserOutlined />} />


                        </div>
                        <span className="login_error">{error}</span>
                        <div className="inputbox">
                            <label>Password</label><br />
                            {/* <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /> */}

                            <Input.Password type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        </div>
                        <div className="btn_login">
                            <button id="login">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login