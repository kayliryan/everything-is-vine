import './App.css';
import React,{useState} from 'react';
import { useToken } from './auth';
import { useParams } from 'react-router-dom';
import './Login.css';


function Signup() {
const [data,setData] = useState({
username:"",
password:"",
full_name:"",
address:"",
phone:"",
email:"",
winery:""
})
const {id} = useParams()

const {username,password, full_name, address, phone, email} = data;

const [,,, signup] = useToken();

const changeHandler = e => {
setData({...data,[e.target.name]:[e.target.value]});
}
console.log(data)

const submitHandler = e => {
e.preventDefault();
let winery = {id}.id

signup(
    data.username[0], 
    data.password[0],
    data.full_name[0],
    data.address[0],
    data.phone[0],
    data.email[0],
    winery
    )
}

console.log(data);
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent" className='fadeIn first'>
                <form onSubmit={submitHandler}>
                    <h3 className= 'mt-2'></h3>
                    <div className="fadeIn second">
                        <input className="form-control" 
                            type="text" 
                            value={username}
                            name="username"
                            onChange={changeHandler}
                            placeholder="Enter Username"
                            required />
                    </div>
                    <div className="fadeIn second">
                        <input className="form-control" 
                            type="text"
                            value={password}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            required
                        />
                    </div>
                    <div className="fadeIn third">
                        <input className="form-control" 
                            type="text"
                            name="full_name" 
                            value={full_name}
                            onChange={changeHandler}
                            placeholder="Enter Full Name"
                            required />
                    </div>
                    <div className="fadeIn third">
                        <input className="form-control" 
                            type="text" 
                            name="address"
                            value={address}
                            onChange={changeHandler}
                            placeholder="Enter Address"
                            required />
                    </div>
                    <div className="fadeIn fourth">
                        <input className="form-control" 
                            type="text" 
                            name="phone"
                            value={phone}
                            onChange={changeHandler}
                            placeholder="Enter Phone Number"
                            required />
                    </div>

                    <div className="fadeIn fourth mb-2">
                        <input className="form-control" 
                            type="text" 
                            name="email"
                            value={email}
                            onChange={changeHandler}
                            placeholder="Enter Email"
                            required />
                    </div>
                    <input type="submit" className="fadeIn fourth" value="Sign Up" />                    
                    <p className="forgot-password text-right mt-0">
                        <a href={`/wineries/${id}/login/`}>Login Here</a>
                    </p>
                </form>
            </div>
        </div>
        );
}


export default Signup