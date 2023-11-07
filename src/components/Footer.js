
import React from 'react'
import {FaFacebookF} from "react-icons/fa6"
import {FaSquareTwitter} from "react-icons/fa6";
const Footer = () => {
  return (

<div class="footer_section">
  <div class="bg-blue p-4 flex justify-center gap-5">
 <div className=''>
 
          <ul>
            <p><FaFacebookF /></p>

            
          </ul>
        

 </div>

 <div className=''>
 
          
          <ul>
            <p>   
            <FaSquareTwitter />

            </p>
            
          </ul>
         
        

 </div>
 <div className=''>
 
 <ul>
           <p>
           &copy; {new Date().getFullYear()} 
           </p>
          </ul>
        

 </div>
 
   

  </div>
</div>
  )
}

export default Footer