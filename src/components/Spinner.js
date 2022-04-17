import spinnerImage from './spinner.gif'
import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className='my-2 text-center'>
                <img src={spinnerImage} alt="spinnerImage"/>
            </div>
        )
    }
}

export default Spinner
