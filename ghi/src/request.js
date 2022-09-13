import './App.css';
import React,{useState} from 'react';
import { useToken } from './auth';
import { useParams } from 'react-router-dom';
import './auth.css';


function Request() {
const [data,setData] = useState({
name:"",
phone:"",
email:"",
})

const {name,phone,email} = data;
const {id} = useParams()

const [,,request] = useToken();

const changeHandler = e => {
setData({...data,[e.target.name]:[e.target.value]});
}

console.log(data)

const submitHandler = e => {
e.preventDefault();
request(
    data.name[0], 
    data.phone[0],
    data.email[0],
    id)
}

return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                </div>
                <form onSubmit={submitHandler}>

                    <input type="text" id="name" className="fadeIn second" name="name" placeholder="Enter Name" 
                    value={name} onChange={changeHandler}/>

                    <input type="text" id="phone" className="fadeIn third" name="phone" placeholder="Enter Phone Number"  
                    value={phone} onChange={changeHandler}/>

                    <input type="email" id="email" className="fadeIn third" name="email" placeholder="Enter Email"  
                    value={email} onChange={changeHandler}/>

                    <input type="submit" className="fadeIn fourth" value="Submit Request" />

                </form>
            </div>
        </div>
    
);
}

export default Request;
