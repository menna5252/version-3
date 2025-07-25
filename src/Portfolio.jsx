import React from 'react'
import img1 from './assets/imgi_1_poert1.png'
import img2 from './assets/imgi_2_port2.png'
import img3 from './assets/imgi_3_port3.png'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio-section'>
        <h1>portfolio component</h1>
        <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div className="card">
                        <img src={img1} alt="" />
                    </div>
                    
                </div>
                <div class="col">
                    <div className="card">
                        <img src={img2} alt="" />
                    </div>
                    
                </div>
                <div class="col">
                    <div className="card">
                        <img src={img3} alt="" />
                    </div>
                    
                </div>
                <div class="col">
                    <div className="card">
                        <img src={img1} alt="" />
                    </div>
                    
                </div>
                <div class="col">
                    <div className="card">
                        <img src={img2} alt="" />
                    </div>
                    
                </div>
                <div class="col">
                    <div className="card">
                        <img src={img3} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio