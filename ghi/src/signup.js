// import './App.css';
// import React,{useState} from 'react';

// function Signup() {
// const [data,setData] = useState({
// username:"",
// password:"",
// name:"",
// address:"",
// phone:"",
// email:"",
// winery:[]
// })

// const {username,password} = data;

// const changeHandler = e => {
// setData({...data,[e.target.name]:[e.target.value]});
// }
// console.log(data)

// const submitHandler = e => {
// e.preventDefault();
// console.log(data);
// }

// export default class SignUp extends Component {
//   render() {
//     return (
//       <form>
//         <h3>Sign Up</h3>
//         <div className="mb-3">
//           <label>First name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Name"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Last name</label>
//           <input type="text" className="form-control" placeholder="Last name" />
//         </div>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>
//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Already registered <a href="/sign-in">sign in?</a>
//         </p>
//       </form>
//     )
//   }
// }

