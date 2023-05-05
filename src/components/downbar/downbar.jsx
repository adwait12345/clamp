import React, { useEffect, useState } from 'react'
import './downbar.css'

import { useDispatch, useSelector } from "react-redux";
import { setDown } from '../../redux/action/action'

import { IoIosCloseCircleOutline } from 'react-icons/io';
import Buy from '../buy/buy';


export default function Downbar() {
    let dispatch = useDispatch();

    const Down = useSelector((state) => state.allDown.down)

    const close = () => {

        if (Down === true) {
            document.querySelector("#downbar").style.bottom = "-87vh";
            document.querySelector("body").style.overflow ="visible"

            dispatch(setDown(false));
        } else if (Down === false) {
            document.querySelector("#downbar").style.bottom = "0";
            document.querySelector("body").style.overflow = "hidden"

            dispatch(setDown(true));
        }

    }

    

  return (
    <>
    <div className="downbar" id='downbar'>
        <div className="inner-downbar">
            <div className="downbar-top">
             <IoIosCloseCircleOutline onClick={()=>{close();}} />
            </div>
            <div className="downbar-bot">
                <Buy/>
            </div>
        </div>
    </div>
    </>
  )
}
