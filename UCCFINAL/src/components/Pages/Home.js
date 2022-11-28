import React from "react";
import "./Home.css";
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
// import Rotate from 'react-reveal/Rotate';
// import Zoom from 'react-reveal/Zoom';
export const Home = () => {
  return (
    <>


    <div className="top-header">
      {/* logo */}
      <i className="fas fa-code sd1"></i>


{/*div for first typewriter */}
<div className="first fas">
<Typewriter
options={{
    autoStart:true,
    loop:true,
    delay:70,
    pauseFor:99999999,
    strings:["UNITED CODERS CLUB"]

}}
/>
<br></br>
<Typewriter
options={{
    autoStart:true,
    loop:true,
    delay:70,
    pauseFor:9999999,
    strings:["CREATE-BUILD-INNOVATE"]

}}
/>
</div>
</div>
<br></br>

<br></br>

<br></br>

<Fade bottom>
   <h2 className="hdng">ABOUT US</h2>

 <div className="About-section">


     
 <Fade left>ader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites"]
 </Fade>
 <br></br>
 <Fade right>ader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites"]
 </Fade>
 <br></br>
 <Fade left>ader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites"]
 </Fade>
</div> 
</Fade>

<br></br>

<div className="imgs">
 <Flip>  <img src="https://pbs.twimg.com/media/FgfWYNHVIAAsUrA?format=png&name=large" height={"400px"} width={"500px"}></img></Flip> 
 
</div>
 




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

<footer class="w3-center w3-black w3-padding-64 fclass ">

<Fade bottom><a href="/" class="w3-button w3-light-grey "><i class="fa  w3-margin-right "></i>Follow Us On</a></Fade>
            <div class="w3-xlarge w3-section ">
            <Fade bottom><a href="https://www.facebook.com/"><i class="fa1 fa fa-facebook-official w3-hover-opacity sm"></i></a>
                <a href="https://www.facebook.com/"><i class="fa1 fa fa-instagram w3-hover-opacity sm"></i></a>
                <a href="https://www.facebook.com/"><i class="fa1 fa fa-pinterest-p w3-hover-opacity sm"></i></a>
                <a href="https://www.facebook.com/"><i class="fa1 fa fa-twitter w3-hover-opacity sm"></i></a>
                <a href="https://www.facebook.com/"><i class="fa1 fa fa-linkedin w3-hover-opacity sm"></i></a>
                </Fade>
                
                
                
           
            </div>
            <p>UCC CLUB |<a href="https://cbit.ac.in " title="W3.CSS " target="_blank " class="w3-hover-text-green ">CBIT</a></p>
              
        </footer>

    </>
  );
};
