import React, { Component } from 'react'

export default class Einput extends Component {
  render() {
    return (
    <div>
         <div className='field'>
            <label htmlFor="ema">Email address*</label>
      <input className='inp' type="email" name="" id="ema" required placeholder='Enter email address'/>
    </div>
  </div>
    )
  }
}
