import React from 'react';
import Header from '@/components/Header';


import { useContext } from 'react';
import ToggleContext from '@/utils/helpers';

const About = () => {
  const {show,setShow}=useContext(ToggleContext);
  return (<>

  <Header />
  <div className={`${show ? 'section_container' :'section_container_inactive'}`}>about</div>
  </>
  
  )
}

export default About;