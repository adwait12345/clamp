import React from 'react'
import './buy.css'
import "swiper/css/navigation";

import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaGasPump } from 'react-icons/fa';

import { useDispatch, useSelector } from "react-redux";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Navigation } from "swiper";





export default function Buy() {
    let dispatch = useDispatch();

    const Composition = useSelector((state) => state.allTypes.type)
    let Comp = Composition.composition


    const Next =()=>{
        document.querySelector(".swiper-button-next").click()
    }

    const Back =()=>{
        document.querySelector(".swiper-button-prev").click()

    }
  return (
    <>
    
    <div className="buy">
        <div className="inner-buy">
                <div className="buy-top">
            <h2>{Composition.name} Index</h2>
        </div>
        <div className="buy-menu">
                      <Swiper className="mySwiper" navigation={true} modules={[Navigation]} >
                          <SwiperSlide>
                              <div className="buy-bet">
                                  <div className="buy-input">
                                      <h3>Enter Amount <span>in $</span></h3>
                                      <input type="number" />
                                      <h3>Amount in Matic <span>approx</span> </h3>
                                      <p>1.0153387220743777</p>
                                  </div>
                                  <div className="token-composition">
                                      <h3>Token Composition</h3>
                                      <div className="compositions">
                                          {Composition.composition.map((e,key) => {
                                              return (
                                                  <div className="composition" key={key}>
                                                      <div className="composition-top">
                                                          <img src={`https://test.joinclamp.com/tokens/${e.tokenName}.svg`} alt="" />
                                                          <p>{e.tokenName} <br /> <span>{e.tokenName}</span></p>
                                                      </div>
                                                      <div className="composition-bet">
                                                          <div className="composition-bet-top">
                                                              <p>50.00%</p>
                                                          </div>
                                                          <div className="composition-bet-bot">
                                                              <input type="range" name="" id="" />
                                                              <span>0.000010742588281163539</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              )
                                          })}


                                      </div>

                                  </div>

                                  <div className="buy-bot">
                                      <div className="note">
                                          <p><AiOutlineInfoCircle /> By clicking "Next", you are confirming that you have read our Terms of Use and Privacy Policy. </p>
                                      </div>
                                      <div className="buy-buttons">
                                          <button>Reset Composition</button>
                                          <button className='next' id='next' onClick={Next} > Next</button>
                                      </div>

                                  </div>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className="buy-bet">
                                  <div className="buy-final">
                                      <h1>1.011624578026098 Matic</h1>
                                    <div className="gas">
                                          <span><FaGasPump/> Network Fees</span>
                                          <p>242385813857 Wei</p>
                                    </div>
                                  </div>
                                  <div className="token-composition">
                                      <h3>Token Composition</h3>
                                      <div className="compositions">
                                          {Comp.map((e,key) => {
                                              return (
                                                  <div className="composition" key={key}>
                                                      <div className="composition-top">
                                                          <img src={`https://test.joinclamp.com/tokens/${e.tokenName}.svg`} alt="" />
                                                          <p>{e.tokenName} <br /> <span>{e.tokenName}</span></p>
                                                      </div>
                                                      <div className="composition-bet">
                                                          <div className="composition-buy">
                                                              <p>50.00%</p>
                                                              <span>0.000010742588281163539</span>

                                                          </div>
                                                    
                                                      </div>
                                                  </div>
                                              )
                                          })}


                                      </div>

                                  </div>

                                  <div className="buy-bot">
                                      <div className="note">
                                          <p><AiOutlineInfoCircle /> By clicking "Buy", you are confirming that you have read our Terms of Use and Privacy Policy. </p>
                                      </div>
                                      <div className="buy-buttons">
                                          <button className='prev' onClick={Back}>Back</button>
                                          <button  id='next' > Buy</button>
                                      </div>

                                  </div>
                              </div>
                          </SwiperSlide>
                      </Swiper>


        </div>

        </div>

    </div>
    </>
  )
}
