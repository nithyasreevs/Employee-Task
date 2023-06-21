import React from "react";
import'./Header.css'
import { useNavigate } from "react-router-dom";
function Header(props){
    let navigate =useNavigate()
    return(
        <div>           
            <div class="logo">
                <a href="#home"><h2>Logo</h2></a>          
            </div>
            <div className="header">
            <a href="">Home</a>
            <a href="">Employee List</a>
            <a href="">Hukum Gupta  -</a>
            <button className="logout" onClick={()=>{navigate('/')}}>Logout</button>
            </div>
            
        </div>
    )
}
export default Header;