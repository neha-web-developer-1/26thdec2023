import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Auth from './Auth'

export default function About() {
  
  const [form,setForm] = useState('')
  const handleClick = ()=>{
  setForm(<Auth/>)
  }
  
  return (
    <div>
      <div className='container'>        
        <h5 className='display-5'>About</h5>
        <hr />
        <Link to={"/contact"}>Contact Us</Link>
       

        <p>Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>
<hr />
<button onClick={handleClick}>Form</button>
<div>
  {form}
</div>
</div>
    </div>
  )
}
