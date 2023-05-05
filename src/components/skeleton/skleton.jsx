import React from 'react'
import './skleton.css'
export default function Skleton() {
  return (
      <>       
       <div className="card">
          <div className="inner-card">
              <div className="card-upper">
                  <div className="card-top">
                      <div className="skeleton skeleton-text skeleton-text__img"></div>
                  </div>
                  <div className="card-bet">
                      <div className="card-bet-left">
                          <div className="skeleton-content-left">
                              <div className="skeleton skeleton-text skeleton-text__body">
                
                              </div>
                              <div className="skeleton skeleton-text skeleton-footer">
                              </div>
                          </div>

                      </div>
                      <div className="skeleton-content-right">
                                              <div className="skeleton skeleton-text skeleton-text__body">
            
                      </div>
                      <div className="skeleton skeleton-text skeleton-text__body">

                      </div>
                          <div className="skeleton skeleton-text skeleton-text__img"></div>

                      </div>

                  </div>
              </div>

              {/* <div className="skeleton skeleton-text skeleton-footer">
              </div> */}
              
          </div>
      </div>

    </>
  )
}
