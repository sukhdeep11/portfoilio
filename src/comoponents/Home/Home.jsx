import React from 'react'
import Header from '../Header/Header'
import Info from '../Info/Info'
import Social from '../Social/Social';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

export default function Home() {
  return (
    <div className='bg-neutral-900'>
        <Header/>
        <Info/>
        <Social/>

        <Contact/>
        <Footer/>


                
   </div>
  )
}
