import React, { useEffect, useState } from 'react'
import './card.css'
import DownImg from '../../assets/svgs/down-right.svg'
import axios from "axios"
import Skleton from '../skeleton/skleton'
import Skletons from '../skeleton/Skletons'
import { MdOutlineArrowForwardIos } from 'react-icons/md';


import { useDispatch, useSelector } from "react-redux";
import { setDown,setType } from '../../redux/action/action'

export default function Card() {
  let dispatch = useDispatch();
  
  const [Loading, setLoading] = useState(true)
  const [Response, setResponse] = useState([])
  const [sidebar, setSidebar] = useState(false);
  const Down = useSelector((state)=>state.allDown.down)

  useEffect(()=>{
    setLoading(true)
    axios.get('https://api.joinclamp.com/v1/indexes')
      .then((response) => {
        console.log(response.data.data);
        if(response.data.success === true){
          setLoading(false)
          setResponse(response.data.data.all_indexes)
          console.log(Response)
        }
        else{
          setLoading(true)
          console.log("Error in getting Response")
        }
      });

///////////////////////////////////////////////////////////////





  },[])


const Open =()=>{
  if (Down === true) {
    document.querySelector("#downbar").style.bottom = "-87vh";
    document.querySelector("body").style.overflow = "visible"

    dispatch(setDown(false));
  } else if (Down === false) {
    document.querySelector("#downbar").style.bottom = "0";
    document.querySelector("body").style.overflow="hidden"
    dispatch(setDown(true));
  }
}



  return (
    <>
    {
    Loading?<Skletons/>:
    
    Response.map((e,key)=>{
      return(
        <div className="card" id='card'  key={key} onClick={() => { Open(); dispatch(setType({name:e.indexName,composition:e.indexComposition})) }}>
          <div className="inner-card">
            <div className="card-upper">
              <div className="card-top">
                <h2>{e.indexName} <MdOutlineArrowForwardIos /></h2>
              </div>
              <div className="card-bet">
                <div className="card-bet-left">
                  <span>Underlying Tokens</span>
                  <div className="icons">
                    {e.indexComposition.map((p,k)=>{
                      return <img key={k} src={`https://test.joinclamp.com/tokens/${p.tokenName}.svg`} alt="" />
                    })}
                  </div>

                </div>
                <div className="card-bet-right">
                  <span> Price Change <br /> (in 24hrs)</span>
                  <div className="stat">
                    <img src={DownImg} alt="" />
                    <h1>1.6%</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-bot">
              {/* <button>Buy</button> */}
            </div>
          </div>
        </div>
      )
    })}
    </>
  )
}
