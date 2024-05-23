import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"
import RenderAd from "../componentsAd/RenderComponent/RenderAd"
import { advertisements,vertical_advertisement } from "../advertisement"

import './page.css'
const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {

  return (
    <div className="whole-container">
      <div className="advertisement">
      <div className="Adcontainer">
          <div className="Adcontainer-sub">      
            <RenderAd advertisements={advertisements} name="one" delay={1000} type="left"/>
          </div>
      </div> 

      <div className="Adcontainer">
          <div className="Adcontainer-sub">      
            <RenderAd advertisements={advertisements} name="one" delay={1000} type="left"/>
          </div>
      </div> 
      <div className="Adcontainer">
          <div className="Adcontainer-sub">      
            <RenderAd advertisements={advertisements} name="one" delay={1000} type="left"/>
          </div>
      </div>                    
      </div>           
    <div className="sides">
      <div className="advertisement-Lside">
      <div className="Adcontainer-s">
          <div className="Adcontainer-sub-s">      
            <RenderAd advertisements={vertical_advertisement} name="one" delay={1000} type="left"/>
          </div>
      </div> 
      </div>
    <div className="page-container">
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </div>
    <div className="advertisement-Rside">
      <div className="Adcontainer-s">
          <div className="Adcontainer-sub-s">      
            <RenderAd advertisements={vertical_advertisement} name="one" delay={1000} type="left"/>
          </div>
      </div> 
      </div>
    </div>
    </div>
  )
}

export default Pages

