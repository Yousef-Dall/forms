import React, { Component } from 'react'
import First from '../../components/first half'
import Sec from '../../components/sec half'
import "./style.css"

export default class Before extends Component {
  render() {
    return (
      <div className='before'>
        <div className='firstcon'>

        <First imglnk = "./imgs/Group 3.png" quote = "I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them." auth = "Hideo Kojima" ndlnk = "./imgs/Vector 1.png"/>
        </div>
        <Sec />
      </div>
    )
  }
}
