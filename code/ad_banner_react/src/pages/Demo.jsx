import React from 'react'
import './demo.css'
import RenderAd from '../components/RenderComponent/RenderAd'
import { advertisements,vertical_advertisement } from '../advertisement'
function Demo() {
  return (
    <div className="demo-container">
        <div className="Adcontainer-mid">
            <div className="Adcontainer-sub">     
                <RenderAd advertisements={advertisements} name="one" delay={1000} type="left"/>
            </div>
            <div className="Adcontainer-sub">     
                <RenderAd advertisements={advertisements} name="one" delay={1000} type="left"/>
            </div>
            <div className="Adcontainer-sub">     
                <RenderAd advertisements={advertisements} name="one" delay={1000} type="left"/>
            </div>
            
        </div> 
        <div className="division">
            <div className="left-side">
            <div className="Adcontainer">
            <div className="Adcontainer-sub">     
                <RenderAd advertisements={vertical_advertisement} name="one" delay={1000} type="left"/>
            </div>
            
        </div> 
            </div>
            <div className="genral-instruction">
            Greetings from our team! Welcome to the "Dynamic Load Component." 
            This powerful tool allows you to customize your advertisement experience by specifying the delay
            between ad changes. Simply provide the delay parameter and an array of advertisement images, and 
            watch as your ads dynamically rotate without repetition. Enhance viewer engagement and maximize the 
            impact of your advertising efforts with this efficient and versatile component. Happy advertising!
        </div>
        <div className="right-side">
        <div className="Adcontainer">
            <div className="Adcontainer-sub">     
                <RenderAd advertisements={vertical_advertisement} name="one" delay={1000} type="left"/>
            </div>
        </div> 
        </div>
        </div>

    </div>
  )
}

export default Demo