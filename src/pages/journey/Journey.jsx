import React from 'react'
import "./journey.css"
import grasspic from "../../assets/grasspic.jpg"
const Journey = () => {
  return (
    <>
      <div className='JourneyContainer'>
        <div className='imageContainer'>
          <img src={grasspic} alt="" />
          <h1>THE JOURNEY</h1>
        </div>
        <div className='bottomContainer'>
          <div className='bottomContent'>
            <div className='timelineCircle'>
                 <h2 className='bottomTitle'>THE ROOTS</h2>
                 <span className='bottomPara'>Our entire life when we shop,we are limited by choices that are there in a store . We are often on the side where we buy our favourite coloured shoes made by someone else but what if we designed it? What if we could involve in the making of a shoe we want to buy? This little thought sprouted to become what we are today, KICKSUP! ;)</span>
            </div>
            <div className='timelineCircle'>
              <h2 className='bottomTitle'>CHAPTER I</h2>
              <span className='bottomPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus nesciunt porro eos aspernatur ratione, deserunt illo soluta expedita officia pariatur, quos omnis corporis distinctio deleniti placeat libero quis? Ex!</span>
            </div>
            <div className='timelineCircle'>
              <h2 className='bottomTitle'>CHAPTER II</h2>
              <span className='bottomPara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium iure temporibus alias sapiente architecto illum rerum voluptates delectus consequuntur impedit itaque voluptate, voluptas, tempore pariatur. Quam vitae assumenda dolorem!</span>
            </div>
            <div className='timelineCircle'>
              <h2 className='bottomTitle'>KICKSUP</h2>
              <span className='bottomPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat corrupti consequuntur reprehenderit a nihil voluptas magni alias aspernatur eaque?</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Journey
