import React from 'react'
import Button from '@/components/Button'
import Header from '@/components/Header'

import { useContext } from 'react';
import ToggleContext from '@/utils/helpers';




export default function Contact() {

    const {show,setShow}=useContext(ToggleContext);
  return (
    <>
    <Header />
    <section className={`${show?'section_container':"section_container_inactive"}`}>
    <div className=' flex items-center justify-center p-6 '>
       
    <form className='bg-white p-4 rounded-lg shadow-md '>
        <div className='flex justify-between mb-6 '> 
        <div className='font-bold  uppercase'>personal info</div>
        <div className='flex gap-3'>
          
            <Button data='ADD' bg='green'/>

            <Button data='Edit' bg='green'/>
        </div>
        </div>
        <div className='flex gap-3'>
        <div className='mb-4 flex flex-col  '> 
        <label htmlFor='name'>firstname</label>
    <input className="border-b border-gray-400 w-auto py-2 focus:outline-none" type="text" name="" id="" />
    </div>

    <div className='mb-4 flex flex-col '> 
        <label htmlFor='name'>lastname</label>
    <input className="border-b border-gray-400 w-full py-2 focus:outline-none" type="text" name="" id="" />
    </div> 
    <div className='mb-4 flex flex-col '> 
        <label htmlFor='name'>email</label>
    <input className="border-b border-gray-400 w-full py-2 focus:outline-none flex-bases-1" type="email" name="" id="" />
    </div> 
    </div>

    

    <div className='mb-4 flex flex-col '> 
        <label htmlFor='name'>address</label>
    <input className="border-b border-gray-400 w-full py-2 focus:outline-none" type="text" name="" id="" />
    </div>

    <div className='mb-4 flex flex-col '> 
        <label htmlFor='name'>city</label>
    <input className="border-b border-gray-400 w-full py-2 focus:outline-none" type="text" name="" id="" />
    </div>

    <div className='mb-4 flex flex-col '> 
        <label htmlFor='name'>state/province</label>
    <input className="border-b border-gray-400 w-full py-2 focus:outline-none" type="text" name="" id="" />
    </div>
    <div className='flex gap-3'>
    <div className='mb-4 flex flex-col '> 
        <label htmlFor='name'>Zip/Postal Code</label>
    <input className="border-b border-gray-400 w-full py-2 focus:outline-none" type="text" name="" id="" />

    </div>

    <div className='mb-4 flex flex-col '> 
        <label htmlFor='name'>phone</label>
    <input className="border-b border-gray-400 w-full py-2 focus:outline-none" type="text" name="" id="" />
    </div>

    </div>
    <Button data='submit' bg='blue'/>
    </form>
    </div>
    </section>
    {/* <Footer /> */}
    </>
  )
}

