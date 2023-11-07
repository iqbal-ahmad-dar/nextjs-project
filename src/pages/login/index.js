
import React from 'react'
import Button from '@/components/Button'
import Header from '@/components/Header'
import classes from '../../styles/login.module.css'
import Link from 'next/link'
import { useContext } from 'react';
import ToggleContext from '@/utils/helpers';

const Login = () => {
    const{show,setShow}=useContext(ToggleContext);
  return (
    <div>
        <Header />
        <section  className={`${show?'section_container':'section_container_inactive' } ${classes.login_container}`}> 
        <form className={classes.form} >
            <div>
                <h1>Login</h1>
            </div>

            <div className={classes.form_group_input}> 
            <input type='email'  placeholder='email'/>

                <input type="password" name="" id="" placeholder='password'/>

            </div>

            

            <p>Don't have an account ? <span ><Link href='/register' >Register</Link></span></p>
            <p ><Link href='/changepassword'> change password </Link></p>
            <p ><Link href='/forgot'> forgot password </Link></p>

            <div>
                <Button bg='grey' data='submit' />
            </div>



           

         

        </form>
        </section>

    </div>
  )
}

export default Login