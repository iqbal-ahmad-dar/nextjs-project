import React from 'react'
import Header from '@/components/Header'
import Button from '@/components/Button'
import Link from 'next/link';
import classes from "../../styles/forgot.module.css";
import { useContext } from 'react';
import ToggleContext from '@/utils/helpers';
const Forgot = () => {
  const {show,setShow}=useContext(ToggleContext);
  return (
    <>
        <Header />
        <section className={`${classes.login_container} ${show?'section_container':'section_container_inactive'}`}> 
        <form className={classes.form} >
            <div>
                <h1>Forgot Password</h1>
            </div>

            <div className={classes.form_group_input}> 
            <input type='email'  placeholder='email'/>

            </div> 
            <div>
               <Link href='/forgot/otp'> <Button bg='grey' data='submit' /> </Link> 
            </div>



           

         

        </form>
        </section>
    
    </>
   
    
  )
}

export default Forgot