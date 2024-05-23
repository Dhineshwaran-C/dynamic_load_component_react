import React from 'react'
import AdvertisementCarousel from '../GenrateAdvertisement/AdvertisementCarousel'
import './renderAd.css'

function RenderAd(props) {

    if(props.type==="left"){
        return(<div className='container left'>
        <AdvertisementCarousel advertisements={props.advertisements} name={props.name} delay={props.delay}/>
      </div>)
    }

    else if(props.type==="right"){
        return(<div className='container right'>
        <AdvertisementCarousel advertisements={props.advertisements} name={props.name} delay={props.delay}/>
      </div>)
    }

    else if(props.type==="default"){
        return(<div className='container default'>
        <AdvertisementCarousel advertisements={props.advertisements} name={props.name} delay={props.delay}/>
      </div>)
    }
  
}

export default RenderAd