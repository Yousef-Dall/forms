import React, { Component } from 'react'
import Einput from '../emailinput'
import Pinput from '../passinput'
import Reg from '../reg'
import Smbtn from '../smbtn'
import "./style.css"
export default class Secc extends Component {
  render() {
    return (
      <div className='secc'>
        <Reg regh = "Join the game!" regp = "Go inside the best gamers social network!"/>
        <div className='sms'>
            <Smbtn btnimg = "./imgs/download.png"/>
            <Smbtn btnimg = "./imgs/Vector (8).png"/>
            <Smbtn btnimg = "./imgs/cib_linkedin-in.png"/>
            <Smbtn btnimg = "./imgs/Vector (9).png"/>
        </div>

        <Einput />
        <Pinput />

        <button className='regacc'>Login</button>

        <p>don't have an account? <a href="#">Register</a></p>


      </div>
    )
  }
}
