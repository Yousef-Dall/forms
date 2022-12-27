import React, { Component } from 'react'

export default class Pinput extends Component {
  render() {
    return (
      <div>
        <div className='field'>
            <label htmlFor="pass">Create password*</label>
            <input className='inp' type="password" name="" id="pass" required placeholder='Password'/>
        </div>
      </div>
    )
  }
}
