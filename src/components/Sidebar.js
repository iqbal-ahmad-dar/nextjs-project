import React from 'react'
import {FaHome} from 'react-icons/fa';
import classes from "../styles/header.module.css"
import Link from 'next/link';
import { useContext } from 'react';
import ToggleContext from '@/utils/helpers';

export default function Sidebar () {
    
    const {show,setShow}=useContext(ToggleContext);
  
    return (
        <>         
            <aside className={`${show ? classes.sidebar : classes.inactive_sidebar}`}>
                <header>My header</header>
                <ul>
                    <li><Link href='#'> <i><FaHome /></i>  home </Link></li> 
                    <li><Link href='#'> <i> <FaHome /></i> about </Link></li> 
                    <li><Link href='/magiclinks'> <i> <FaHome /></i> MagicLinks </Link></li> 
                    <li><Link href='/policy'> <i> <FaHome /></i> policy </Link></li> 
                </ul>
            </aside>
        </>
    )
}