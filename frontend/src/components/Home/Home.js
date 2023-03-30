import React from 'react'
import './Home.css';
import Home1 from "../images/home.jpg"
const Home = () => {
  return (
    <>
   <div className="container">
    <div className="Home">
    <div className="icons">
                 <a href=""><i class="fa-brands fa-facebook fa-beat-fade" ></i></a>
                 <a href=""><i class="fa-brands fa-instagram fa-beat"></i></a>
                 <a href=""><i class="fa-brands fa-linkedin"></i></a>
                <a href=""> <i class="fa-brands fa-twitter fa-beat"></i></a>
               <a href="">  <i class="fa-brands fa-youtube fa-beat"></i></a>
                </div>
        <img src={Home1} className="home1" alt="" />
        <div class="bottom-left">
            <div className="Axis">
                <h1>axis kda</h1>
                
            </div>
        </div>

    </div>
   </div>
    </>
  )
}

export default Home
