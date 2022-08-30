import './App.css';
import React,{useState} from 'react';
import { useToken } from './auth';
import { useParams } from 'react-router-dom';
import './login.css';


function Login() {
const [data,setData] = useState({
username:"",
password:""
})

const {username,password} = data;
const {id} = useParams()

const [token,login,logout] = useToken();

const changeHandler = e => {
setData({...data,[e.target.name]:[e.target.value]});
}

console.log(data)

const submitHandler = e => {
e.preventDefault();
login(
    data.username[0], 
    data.password[0],
    id)
}

const submitLogoutHandler = e => {
    e.preventDefault();
    logout()
    }

return (
    // <div className="container">
    //     <form onSubmit={submitHandler} className="form-signin">
    //     <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
    //     <div className="row">
    //         <div className="col">
    //         <input
    //             type="text"
    //             value={username}
    //             name="username"
    //             onChange={changeHandler}
    //             placeholder="Enter Username"
    //         />
    //         <input
    //             type="password"
    //             value={password}
    //             name="password"
    //             onChange={changeHandler}
    //             placeholder="Enter Password"
    //         />
    //         <input type="submit" value="Login" />
    //         </div>
    //     </div>
    //     </form>
    //     <button type="submit" onClick={submitLogoutHandler}>Logout</button>
    //</div>
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                </div>
                <form onSubmit={submitHandler}>
                    <input type="text" id="username" className="fadeIn second" name="username" placeholder="Enter Username" 
                    value={username} onChange={changeHandler}/>
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="Enter Password" 
                    value={password} onChange={changeHandler}/>
                    <input type="submit" className="fadeIn fourth" value="Sign In" />
                </form>
            </div>
            <button type="submit" onClick={submitLogoutHandler}>Logout</button>
            </div>
    
);
}

export default Login;



