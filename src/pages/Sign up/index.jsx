import React, { Component } from 'react'
import First from '../../components/first half'
import Sec from '../../components/sec half'
import "./style.css"

export default class Signup extends Component {
  render() {
    return (
      <div className='before'>
        <div className='firstcon'>

        <First imglnk = "../imgs/Group 3.png" Children = "gamers"></First>
        <img className='ndone' src="./imgs/Vector 1.png" alt="" />
        </div>
        <Sec />
      </div>
    )
  }
}
