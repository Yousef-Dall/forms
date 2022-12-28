import React, { Component } from 'react'
import "./style.css"

export default class First extends Component {
  render() {
    return (
        <div className='blas'>
      <div className='first'>
        <div className='flogo'>
        <img src={this.props.imglnk} alt="" />
        <p>Gamers</p>
        </div>
        <figure className='qq'>
            <blockquote>
            <span className='mark'>“</span><br/>{this.props.quote}
            </blockquote>
            <figcaption>{this.props.auth}</figcaption>
        </figure>

        <img className='nd' src={this.props.ndlnk} alt="" />
      </div>
      </div>
    )
  }
}
