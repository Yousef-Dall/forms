import React, { Component } from 'react'

export default class Quo extends Component {
  render() {
    return (
      <div>
        <figure className='qq'>
            <blockquote>
            <span className='mark'>“</span><br/>{this.props.quote}
            </blockquote>
            <figcaption>{this.props.auth}</figcaption>
        </figure>
      </div>
    )
  }
}
