import React from 'react'
import './Footer.css'
import {BsFillTelephoneFill, BsInstagram} from "react-icons/bs"
import {FaGoogle} from "react-icons/fa"
import JuitLogo from "../../assets/Logo.png"

function Footer() {
  return (
    <>
    <div className='Footer'>

      <div className='Footer-Content'>

        <div className='Footer-Text'>
            <div className='Footer-Details'>
                    <h1 className='Contact-Us'>Contact Us</h1>
                    <div className='Footer-Line_l1'></div>
                    <div className='Footer-Details footertext'>
                    Jaypee University Of Information Technology<br/>
                    Waknaghat, HP - 173234<br/>
                    India<br/>
                    Phone: +xxxxxxxx<br/>
                    Email: example@juitsolan.in<br/>  
                    </div>

                    <div className='Footer-Socials'>    
                    {/* <Link to='//instagram.com/jyc.technical.club?utm_medium=copy_link' className='Sociallinks'><BsInstagram/></Link> */}
                    <a href='tel:' className='Sociallinks'><BsFillTelephoneFill/></a>
                    <a href='mailto:' className='Sociallinks'><FaGoogle/></a>
            </div>  
        </div>
      </div>


        <div className='Footer-Logo'>
          <div className='Footer-Logo_Murious'>
              <img className='Murious-Logo' alt='Murious' src={JuitLogo}/>
          </div>
        </div>

      </div>

      <div className='Footer-Copyright'>
            Copyright © Shashwat & Ujjwal.<br/> All Rights Reserved.
      </div>

    </div>
    </>
  )
}

export default Footer