import './App.css';
import React,{useState} from 'react';
import { useToken } from './auth';
import { useParams } from 'react-router-dom';


function Login() {
const [data,setData] = useState({
username:"",
password:""
})

const {username,password} = data;
const {id} = useParams()

const [token,login] = useToken();

const changeHandler = e => {
setData({...data,[e.target.name]:[e.target.value]});
}
console.log(data)

const submitHandler = e => {
e.preventDefault();
login(data.username[0], data.password[0],{id}.id)
console.log(data);
}
return (
    <div className="container">
        <form onSubmit={submitHandler} className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <div className="row">
            <div className="col">
            <input
                type="text"
                value={username}
                name="username"
                onChange={changeHandler}
                placeholder="Enter Username"
            />
            <input
                type="password"
                value={password}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"
            />
            <input type="submit" value="Login" />
            </div>
        </div>
        </form>
    </div>
);
}

export default Login;
