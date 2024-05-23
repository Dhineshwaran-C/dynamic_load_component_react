import React from 'react'
import AdvertisementCarousel from '../GenrateAdvertisement/AdvertisementCarousel'
import './renderAd.css'

function RenderAd(props) {
    return(
    <div className='Rendercontainer'>
       <AdvertisementCarousel advertisements={props.advertisements} name={props.name} delay={props.delay}/>
    </div>
  )
  
}

export default RenderAd


