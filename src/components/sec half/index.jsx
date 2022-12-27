import React, { Component } from 'react'
import Reg from '../reg'
import "./style.css"

export default class Sec extends Component {
  render() {
    return (
      <div className='sec'>
        <div className='back'>
            <img src="./imgs/arrow_back_ios_24px.png" alt="" />
            <p>Back</p>
        </div>
        <div className='formfa'>
          <Reg regh = "Register Individual Account!" regp = "For the purpose of gamers regulation, your details are required."/>
            
            <form className='form' action="">
                <div className='field'>
                    <label htmlFor="ema">Email address*</label>
                    <input className='inp' type="email" name="" id="ema" required placeholder='Enter email address'/>
                </div>
                <div className='field'>
                    <label htmlFor="pass">Create password*</label>
                    <input className='inp' type="password" name="" id="pass" required placeholder='Password'/>
                </div>
                <div className='field'>
                    <label htmlFor="repass">Repeat password*</label>
                    <input className='inp' type="password" name="" id="repass" required placeholder='Repeat password'/>
                </div>
                <div> 
                    <input type="checkbox" name="" id="cb" />
                    <label htmlFor="cb">I agree to terms & conditions</label>
                </div>
                <div className='field'>
                    <button className='regacc'>Register Account</button>
                    <button className='loginbutt'><img className='google' src="./imgs/download.png" alt="" /><p className='lo'>login</p></button>

                </div>
            </form>
        </div>
        
      </div>
    )
  }
}
