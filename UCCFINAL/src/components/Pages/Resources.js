import "./resources.css"; 
import React from "react";  
import Cards from "C:/Users/Harsha Vardhan K/OneDrive/Desktop/UCC-club-main/UCCFINAL/src/components/Pages/Cards.js";
import CardData from "C:/Users/Harsha Vardhan K/OneDrive/Desktop/UCC-club-main/UCCFINAL/src/components/Pages/CardData.js";
import CodeMobile from 'C:/Users/Harsha Vardhan K/OneDrive/Desktop/UCC-club-main/UCCFINAL/src/assets/CodeMobile.jpg';
// import homebg from 'UCCFINAL/src/assets/homebg.png';

export const Resources=()=>{
    return(   
        <>
        <div className='top-heading'>
		
        <div class="top-image">
      {/* <img src= {CodeMobile} alt="CodeClub" /> */}
      </div>
      <div class='top-text'>
        {/* <h1>hello guys ! this is the resourse page.  You can find the useful resourses
         that helps you get started with your learning journey</h1> */}
      </div>
	 </div>
     <br></br>
     <br></br>
    <div className="topic"><h1> Topics ! </h1></div>
    <br></br>
    <br></br>

    {/* <div><p>Hello world </p></div> */}
    <div className="home-cards">
        <Cards details = {CardData}/>
    </div>
    </>)
    
    
}

export default Resources
