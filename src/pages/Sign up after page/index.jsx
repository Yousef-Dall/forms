import React, { Component } from 'react'
import Fst from '../../components/fst'
import First from '../../components/first half'
import "./style.css"
import Secc from '../../components/sec'

export default class After extends Component {
  render() {
    return (
      <div className='after'>
        <First imglnk = "./imgs/Group 3 (1).png" quote = "I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them." auth = "Hideo Kojima" ndlnk = "./imgs/superscene-34-joystick_trans 1.png"/>

        <Secc />
        
      </div>
    )
  }
}
