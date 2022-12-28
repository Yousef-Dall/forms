import React, { Children, Component } from 'react'
import Quo from '../quote'
import "./style.css"

export default class First extends Component {
  render() {
    return (
        <div className='blas'>
      <div className='first'>
        <div className='flogo'>
        <img src={this.props.imglnk} alt="" />
        {/* <p>Gamers</p> */}
        {this.props.Children}
        </div>
        <Quo quote = "I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them." auth = "Hideo Kojima"/>

        {/* <div className='imgcon'>
        <img className='nd' src={this.props.ndlnk} alt="" />
        </div> */}
      </div>
      </div>
    )
  }
}
