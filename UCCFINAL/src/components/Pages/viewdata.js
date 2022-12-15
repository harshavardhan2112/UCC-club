import axios from 'axios'
import "./viewdata.css";
import { useState, useEffect } from "react";
//const data = await axios.get("http://localhost:9000/")
// import "./Team.css";





export const Admin = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function fun() {
            await axios.get("http://localhost:9000/admin").then(res => setData(res.data)).catch(err => console.log(err))
        }
        fun()
    }, []);


    return (
        <>
        <br></br> 
            <br></br> 
            <h1>Details</h1>
            <br></br>
            <table>
            <tr>
                <th>Name</th> 
                <th>College</th> 
                <th>Email</th> 
                <th>Phone No</th> 
                <th>Department-section</th>
            </tr> 
            </table>
            {data.length > 0 && data?.map(user => 
           <div className = "A">


            {/* <h1>{user.name}</h1>  */}
           <table style={{border: "1px solid #FFC300" }}> 
            {/* <tr>
                <th>Name</th> 
                <th>College</th> 
                <th>Email</th> 
                <th>Phone No</th> 
                <th>Department-section</th>
            </tr>  */}
            <tr className = "B"> 
                <td >{user.name}</td>
                <td>{user.college}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.depart_sec}</td> 
               

            </tr>
           </table>  
           
           </div> 
           

        )}
        <div>
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br>
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
           </div>
          
        </>
    )
}
export default Admin