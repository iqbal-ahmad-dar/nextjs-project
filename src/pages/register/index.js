
import Header from '@/components/Header'
import React from 'react'
import classes from "../../styles/register.module.css"
import Button from '@/components/Button';
import Link from 'next/link';
import { useContext } from 'react';
import ToggleContext from '@/utils/helpers';




const Register = () => {


    const{show,setShow}=useContext(ToggleContext);
  return (
    <>
    
    <Header />
    

    <section className={`${show?'section_container':'section_container_inactive' } ${classes.login_container}`}> 
        <form className={classes.form} >
            <div>
                <h1>Register</h1>
            </div>


            <div className={classes.form_group_input} >
                <input type="text" name="" placeholder='First-name' />

                <input type="text" name="" id=""  placeholder='Last-name'/>
            </div>

            <div className={classes.form_group_input}> 
            <input type='email'  placeholder='your-email'/>

                <input type="password" name="" id="" placeholder='password' />

            </div>

            

            <p>Already have an account ? <span ><Link href='/login'>Login</Link></span></p>

            <div>
                <Button bg='grey' data='submit' />
            </div>



           

         

        </form>
        </section>
     
    
    
    
    </>
   
  )
}

export default Register