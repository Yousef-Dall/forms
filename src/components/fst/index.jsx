import React, { Component } from 'react'
import "./style.css"
import First from '../first half'
export default class Fst extends Component {
  render() {
    return (
      <div className='fst'>
        <div className='logo'>
            <img src="./imgs/Group 3 (1).png" alt="" />
            <p>Gamers</p>
        </div>

        <First quote = "I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them." auth = "Hideo Kojima" ndlnk = "./imgs/superscene-34-joystick_trans 1.png"/>
        
      </div>
    )
  }
}
