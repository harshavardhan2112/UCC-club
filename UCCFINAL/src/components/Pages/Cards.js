

import React from 'react';
// import mongodbb from '../assets/mongodbb.png';
// import expresss from '../assets/expresss.png';
// import reactt from '../assets/reactt.png';
// // import reactt from '../assets/reactt.png';
// import pythonn from '../assets/pythonn.png';
// import linuxx from '../assets/linuxx.png';
// import webdd from '../assets/webdd.png';
// import opensourcee from '../assets/opensourcee.png';
// import aimlll from '../assets/aimlll.png';
// import CodeMobile from '../assets/CodeMobile.jpg';


const Cards = (props) => {
	return (
	<>
	 
	{props.details.map((value,index)=>(
	   <div className='Cards' key = {index}>
		{/* <h1>hello world</h1> */}
		<div className='Cards-image'>
			{/* <a href=""><img src= {mongodbb}/> </a>
			<img src= {mongodbb} onClick="https://arizonaatwork.com" /> */}
			{/* <a href={mongodbb}><img src='https://i.imgur.com/fe0T4nw.png' onClick="https://www.datatrained.com/post/oops-concepts-with-real-time-examples/" /></a> */}
			<li><a href={value.link}><img src={value.img}/></a></li>
		</div>
		<div>
			<p style = {{color:'#FFC300','font-size':'40px'}} className='title'>{value.title}</p>
			<p style = {{color:'white'}} className='content'>{value.content}</p>
			<li  className='buttons'><a href={value.link} ><button style = {{color:'#FFC300'}}>Explore</button></a></li>
			{/* <button>Explore</button> */}
		</div>
	   </div>
	   ))}

	</> 
	);

};

export default Cards;