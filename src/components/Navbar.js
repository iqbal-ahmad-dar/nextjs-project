


import React from 'react'
import Link from 'next/link';
import {Sidebar} from './Sidebar';
import classes from "../styles/header.module.css"
import {FiMenu} from 'react-icons/fi';
import { useContext } from 'react';
import ToggleContext from '@/utils/helpers';

export default function Navbar() {

  const {show,setShow}=useContext(ToggleContext);
  return (
    <>
 

<div className={`${show ? classes.main_header : classes.header_full_width}`}>

    <nav >
        <div className={classes.toggle}>
            <FiMenu onClick={()=>setShow(!show)}/>
        </div>

        <div className={classes.navitems}>
                <Link href="/contact"> 
                <li>Contact</li>
                </Link>
                <Link href="/about">
                <li>About</li>
                </Link>
                <Link href="/register">
                <li>Register</li>
                </Link>
                    
                    <Link href="/login"> 
                <li>login</li>
                </Link>

        </div>
    </nav>


</div>

 
    </>
  )
}
