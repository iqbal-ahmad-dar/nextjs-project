
import React from 'react'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Link from 'next/link'
import classes from "../../../styles/forgot.module.css"
import { useContext } from 'react';
import ToggleContext from '@/utils/helpers'

const index = () => {
  const{show,setShow}=useContext(ToggleContext);
  return (
    <>    <Header />
    <section className={`${classes.login_container} ${show?'section_container':'section_container_inactive'}`}> 
    <form className={classes.form} >
        <div>
            <h1>enter otp</h1>
        </div>
        <div className={classes.form_group_input}> 
        <input type='number'  placeholder='OTP'/>
          

        </div>
       

        <div>

            <Link href="/forgot/otp/createpassword" >
            <Button bg='grey' data='submit' />
            </Link>
          
        </div> 

    </form>
    </section>
    
    </>

    
  )
}

export default index