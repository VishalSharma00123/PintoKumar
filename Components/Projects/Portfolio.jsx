import React from 'react'
import { Link } from 'react-router-dom';
import "./Portfolio.css";
import { useNavigate } from 'react-router-dom';



export const Portfolio = () => {

	
const navigate = useNavigate();

  return (
	<>
<div className="my-5">
      <h1 className='center' >Our Projects</h1>
    </div>

	< div className='container' >
<div className='ch' >
	<div className='center'>
		
		<img  onClick={() => navigate('/Main')} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqU1ANmeGSJc77FeS27BeyDdERrq_rvOy1w&usqp=CAU'/>;
		
	</div>
	<h3 className='center'>Order Delivery Management</h3>
	</div>
	</div>
	<div style={{padding:"20px"}}></div>

	

	< div className='container'>
	<div className='ch' >
	<div className='center'>
		<img onClick={() => navigate('/Main')} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqU1ANmeGSJc77FeS27BeyDdERrq_rvOy1w&usqp=CAU'/>;
	</div>
	<h3>Order Delivery Management</h3>
	</div>

  </div>
	<div style={{padding:"20px"}}></div>


	
	</>
  )
}
