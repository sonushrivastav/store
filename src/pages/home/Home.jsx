import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <div className='container'>
      <div className='left'>
       <h1 className='heading'>Best In Style Collection For You</h1>
       <p className='para'>We craft the, we wont say the best, But through 10 years of experience in the industry</p>

       <button className='btn'>Pre-Order Now</button>
      </div>
      <div className='right'>
        <img className='image' src="https://image.similarpng.com/very-thumbnail/2020/11/White-and-blue-color-sneaker-shoes-on-transparent-background-PNG.png" alt="" />
      </div>
    </div>
  )
}

export default Home
