import Header from '@/components/Header'
import classes from '../../styles/changepassword.module.css'
import Link from 'next/link';
import Button from '@/components/Button';
import { useContext } from 'react';
import ToggleContext from '@/utils/helpers';

import React from 'react'

const changepassword = () => {
    const{show,setShow}=useContext(ToggleContext);
  return (
    <>

    <Header />

    <section className={`${classes.login_container} ${show?'section_container':'section_container_inactive'}`}> 
        <form className={classes.form} >
            <div>
                <h1>changepassword</h1>
            </div>

            <div className={classes.form_group_input}> 
            <input type='password'  placeholder='old password'/>

                <input type="password" name="" id="" placeholder='new password'/>
                <input type="password" name="" id="" placeholder='confirm  password'/>

            </div>

            

            <p> <span ><Link href='/login' >Login</Link></span></p>
            <p> <span ><Link href='/forgot' >Forgot password</Link></span></p>
           
            <div>
                <Button bg='grey' data='submit' />
            </div>


        </form>
        </section>
    
    
    </>
   
  )
}

export default changepassword