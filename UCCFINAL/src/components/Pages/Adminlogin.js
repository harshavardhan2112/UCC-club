// import "./adminlogin.css"; 
// import React from "react";
// const Adminlogin=()=>{
//   const{useState}=React;
  
//   const[eye,seteye]=useState(true);
//   const[inpass,setinpass]=useState("password");
//    const[warning,setwarning]=useState(false);
//   const[tick,settick]=useState(false);
  
//    const[inputText,setInputText]=useState({ 
      
//       email:"",
//       password:""
//   });
  
//     const[wemail,setwemail]=useState(false);
//   const[wpassword,setwpassword]=useState(false);

// const Eye=()=>{
//    if(inpass=="password"){
//        setinpass("text");
//        seteye(false); 
//        setwarning(true);
//    }
//    else{
//        setinpass("password");
//        seteye(true);  
//        setwarning(false);
//    }
// }

// const Tick=()=>{
 
//   if(tick){
//       settick(false);
//   }
//   else{
//       settick(true);
//   }
// }


//   const inputEvent=(event)=>{
      
//       const name=event.target.name; 
//       const value=event.target.value;
//           setInputText((lastValue)=>{ 
//               return{
//                   ...lastValue,
//                   [name]:value
//               }
//           }); 
      
//   } 
   
//   const submitForm=(e)=>{
       
//       e.preventDefault();
      
//       setwemail(false);
//       setwpassword(false);
//       if(inputText.email==""){
//           setwemail(true);
//       }
//       else if(inputText.password=="")
//       setwpassword(true);
//     else{
//       const d={"UCC":"admin","UC3":"admin"}
//       if(inputText.email in d ){
//         if(d[inputText.email]===inputText.password){
//         alert("form submitted");
//       }
//    }
//    else{
//     alert("Wrong Password")
//    }
        
//     }
//   } 
  
//     return(
//         <>
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
//     <br></br>
//       <h1>Login</h1>
//       <br></br>
//       <div id="contact-container2">
//         <div className="contact-info2">
//           </div>
//           <form onChange={submitForm}>
//             <div className='col2'>
//               <div className="form-group2">
//                 <label>Username</label>
//                 <input type="text" className={`${wemail ? "text-warning" : ""}`} value={inputText.email} onChange={inputEvent} name="email"/>
//                 <i className="fa fa-envelope"></i>
//               </div>
//               </div>
//               <div className='col2'>
//               <div className="form-group2">
//                 <label>Password</label>
//                 <input type={inpass} className={` ${warning ? "warning" : ""} ${wpassword ? "text-warning" : ""}`} value={inputText.password} onChange={inputEvent} name="password" />
//                 <i className="fa fa-lock"></i>
//                 <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
//               </div>
//               </div>
//               <div className="col2">
//                 <div className="form-group2 solo2">
//                 <Link
//                 exact
//                 to="/viewdata"
//                 activeClassName="active"
//                  >
//                 <button className="primary2">Login</button>
//               </Link>
                  
//                 </div>
//                 <div className="form-group2 solo2">
//                   <button className="primary2">Forget Password</button>
//                 </div>
//               </div>
//           </form>
//           </div>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </>
//     );
// }
// export default Adminlogin

// import React from "react";
// import "./adminlogin.css"
// import { useEffect, useState } from "react";
// const users = [
//   {
//     username: 'admin1',
//     password: '12345678'
//   },
//   {
//     username:'admin2',
//     password:'012345678'
//   }
// ];
// export default function Adminlogin() {
//   const [data, setData] = useState({
//     username: '',
//     password: ''
//   });
//   const changeHandler = (e) => {
//     setData({...data, [e.target.name]: e.target.value})
//   }

//   const checkUser = (users) => {
//     const usercheck = users.find(user => (user.username === data.username && user.password === data.password));
//     if(usercheck) {
//       console.log("Login successful");
//     }else {
//       console.log("Wrong password or username");
//     }
//     // console.log(uname);
//     console.log(usercheck);
//   }


//   useEffect(() => {
// checkUser(users)
//   }, [data.username, data.password])

//   console.log(data)
//   return (
//     <>
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
//         <br></br>
//           <h1>Login</h1>
//           <br></br>
//           <div id="contact-container2">
//             <div className="contact-info2">
//               </div>
//               <form >
//                 <div className='col2'>
//                   <div className="form-group2">
//                     <label>Username</label>
//                     <input type="text" name="username"
//                 value={data.username}
//                 placeholder="Username"
//                 aria-describedby="inputGroupPrepend2" required
//                 onChange={changeHandler}/>
//                   </div>
//                   </div>
//                   <div className='col2'>
//                   <div className="form-group2">
//                     <label>Password</label>
//                     <input type="password" 
//                     name="password"
//               value={data.password}
//               placeholder="Password"
//               aria-describedby="inputGroupPrepend2" required
//               onChange={changeHandler}/>
//                   </div>
//                   </div>
//                   <div className="col2">
//                     <div className="form-group2 solo2">
//                     <button className="primary2" onClick={checkUser(users)}>Login</button>
                      
//                     </div>
//                     <div className="form-group2 solo2">
//                       <button className="primary2">Forget Password</button>
//                     </div>
//                   </div>
//               </form>
//               </div>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               <br></br>
//               </>
//   );
// }



import './adminlogin.css';
import { NavLink,Link } from "react-router-dom";

export const Adminlogin=()=>{
  function returnText(){
    let input = document.getElementById("username").value;
    console.log(input)
    alert(input)
  }
    return(
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
    <br></br>
      <h1>Login</h1>
      <br></br>
      <div id="contact-container2">
        <div className="contact-info2">
          </div>
          <form>
            <div className='col2'>
              <div className="form-group2">
                <label>Username</label>
                <input type="text" placeholder="username" id="username"/>
              </div>
              </div>
              <div className='col2'>
              <div className="form-group2">
                <label>Password</label>
                <input type="password" placeholder="Password" id="password"/>
              </div>
              </div>
              <div className="col2">
                <div className="form-group2 solo2"><Link
                exact
                to="/viewdata"
                activeClassName="active"
                 >
                <button onclick="returnText()" style = {{'padding-left':'200px'}} className="primary2" type="submit" >Login</button>
              </Link>
                  
                </div>
                {/* <div className="form-group2 solo2">
                  <button className="primary2">Forget Password</button>
                </div> */}
              </div>
          </form>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </>
    );
}
export default Adminlogin