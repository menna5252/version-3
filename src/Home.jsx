import React from 'react'
import img from './assets/imgi_1_avataaars.svg'
import './Home.css'

function Home() {
  return (
    <section className='home'>
        <img src={img} alt="" />
        <h1>START FRAMEWORK</h1>
        <div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </section>
  )
}

export default Home