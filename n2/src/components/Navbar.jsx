import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({Current_user}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link to='/' class="navbar-brand">Home</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
       
        {
            Current_user==="admin"?
            <li class="nav-item active">
            <Link to="/user" className="nav-link active" >Dashboard <span class="sr-only">(current)</span></Link>
          </li>:<></>
        }
       
        
      </ul>
    
    </div>
  </nav>
  )
}

export default Navbar