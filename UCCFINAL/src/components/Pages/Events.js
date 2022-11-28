/*
import React from 'react';
import "./Events.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
export const Events = () => {
  return (
    <div style={{ display: 'block', width: 1300, padding: 10 }}>
     <Fade><h2 className='heading'>CLUB INAGURATION</h2></Fade> 
     <Fade>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d"
src="https://pbs.twimg.com/media/FgdVztCVEAADlOK?format=jpg&name=medium"
            alt=""
          />
          <Carousel.Caption>
            <h3>Inauguration</h3> 
            <h4>April 5,1021</h4>
            
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <img
            className="d1"
src="https://pbs.twimg.com/media/FgdVztCVEAADlOK?format=jpg&name=medium"
            alt=""
          />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
      </Fade>
      <Fade left>
      <p className='c'>UCC- United Coders Club is the 39th addition to the many illustrious clubs 
      of Chaitnay Barathi Institute of Technology,Hyderabad.The Club was Inaugarated on 5th  April,2022
       and the event was graced by CBIT principal Dr.P. Ravinder Reddy and HOD's of various
       departments of the college.</p>
       </Fade>



       <Fade><h2 className='heading'>CLUB INAGURATION</h2></Fade> 
     <Fade>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d"
src="https://pbs.twimg.com/media/FgdVztCVEAADlOK?format=jpg&name=medium"
            alt=""
          />
          <Carousel.Caption>
            <h3>Inauguration</h3> 
            <h4>April 5,1021</h4>
            
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <img
            className="d1"
src="https://pbs.twimg.com/media/FgdVztCVEAADlOK?format=jpg&name=medium"
            alt=""
          />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
      </Fade>
      <Fade left>
      <p className='c'>UCC- United Coders Club is the 39th addition to the many illustrious clubs 
      of Chaitnay Barathi Institute of Technology,Hyderabad.The Club was Inaugarated on 5th  April,2022
       and the event was graced by CBIT principal Dr.P. Ravinder Reddy and HOD's of various
       departments of the college.</p>
       </Fade>



    </div>




  );
};
*/
import React from 'react';
import "./Events.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Fade from 'react-reveal/Fade';
import { NavLink,Link } from "react-router-dom";
import  { useState } from "react";

import classes from './event.module.css'


// import Flip from 'react-reveal/Flip';
export const Events = () => {
// const handleClick = () => setClick(!click);

const handleClick = () => setClick(!click);
const [click, setClick] = useState(false);

  return (
    <div style={{ display: 'block', width: 1300, padding: 10 }} >
     <Fade><h2 className='heading'>CLUB INAUGURATION</h2></Fade> 
     <Fade>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d"
src="https://pbs.twimg.com/media/FgdVztCVEAADlOK?format=jpg&name=medium"
            alt=""
          />
          {/* <Carousel.Caption>
            <h3>Inauguration</h3> 
            <h4>April 5,2021</h4>
            
          </Carousel.Caption> */}
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <img
            className="d1"
src="https://pbs.twimg.com/media/FgdVztCVEAADlOK?format=jpg&name=medium"
            alt=""
          />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
      </Fade>
      <Fade left>
      <p className='c'>UCC- United Coders Club is the 39th addition to the many illustrious clubs 
      of Chaitnay Barathi Institute of Technology,Hyderabad.The Club was Inaugarated on 5th  April,2022
       and the event was graced by CBIT principal Dr.P. Ravinder Reddy and HOD's of various
       departments of the college.</p>
       </Fade>



       <Fade><h2 className='heading1'>National Hackathon 2022</h2></Fade> 
     <Fade>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d"
src="https://pbs.twimg.com/media/FgdVztCVEAADlOK?format=jpg&name=medium"
            alt=""
          />
          {/* <Carousel.Caption>
            <h3>Inauguration</h3> 
            <h4>April 5,2021</h4>
            
          </Carousel.Caption> */}
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <img
            className="d1"
src="https://pbs.twimg.com/media/FgdVztCVEAADlOK?format=jpg&name=medium"
            alt=""
          />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
      </Fade>
      <Fade right>
      <p className='c'>UCC- United Coders Club is conducting a national level 48 hour hackathon on 10th and 11th of November,2022.
      All Enthusiasts of Web development and Machine learning can Register through the link below</p>
       </Fade> 
       <div> 
        <button className='regb'>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li><Link
                exact
                to="/form"
                activeClassName="active"
                className={classes.btn}
              >
                Register Here
              </Link>
              </li>
              </ul>
        </button>
       </div>



    </div> 





  );
};