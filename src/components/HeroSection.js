import React from 'react'
import {Button} from './Button'
import '../App.css'
import '../components/HeroSection.css'


export default function HeroSection() {
    return (
        <div className='hero-container'>
              {/* <video src = {require('../videos/video-2.mp4').default} 
            autoPlay loop muted/>  */}
            <h1>
                ADVENTURE AWAITS
            </h1>
            <p>What are you waiting for?</p>
            <div  className='hero-btns' >
            <Button className='btns' 
            buttonStyle ='btn--outline' 
            buttonSize='btn--large'>
            GET STARTED
            </Button>
            
            <Button className='btns' 
            buttonStyle ='btn--primary' 
            buttonSize='btn--large'>
            WATCH TRAILER<i className='far fa-play-circle'/>
            </Button>  
            </div>
           
        </div>
    );
}
