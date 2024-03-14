import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {useNavigate} from 'react-router-dom'
const Login = () => {

    const [userName, setuserName] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState(false)
    const [err, setErr] = useState("")
    const navigate  = useNavigate()

    const fetchTheData = (e) => {
        e.preventDefault()

        if(userName === "" && password === ""){
            setErr("*Plese Enter Username And Password")
        }
        else if(userName === "kamal" && password === "kamal123"){
            console.log("login Success")
            navigate("/jokes")
            setStatus(prevState => !prevState)
        }
        else if(userName !== 'kamal'){
            setErr("*Please Enter Valid Username")
        }
        
        else if(password !== 'kamal123'){
            setErr("*Please Enter a Valid Password")
        }     
    }

    return (
        <form onSubmit = {fetchTheData} className='background d-flex flex-column justify-content-center'>
            <p style={{color:"#ffffff", textAlign:"center", fontWeight:"bold"}}>username: kamal, password: kamal123</p>
            <div className='container p-4 '>
            <lable htmlFor = "user" className="lable">Username</lable><br/>
            <input id = 'user' type = 'text' placeholder='Username' onChange ={(e) => setuserName(e.target.value)} /><br/>
            <lable htmlFor = 'pass' className="lable">Password</lable><br/>
            <input id = 'pass' type = 'password' placeholder = 'password' onChange={(e) => setPassword(e.target.value)}/><br/>
            <button type = 'submit' className='btn btn-primary col-2'>Login</button>
            {status ?<p></p> : <p style={{color:"red", fontWeight:"500"}}>{` ${err}`}</p>}
            
            </div>
        </form>
    )
}

export default Login