import React, { Component } from 'react'
import loading from './loading3.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' style={{height: '30px', width: '30px'}} src={loading} alt='loading' />
      </div>
    )
  }
}

export default Spinner