import spinnerImage from './spinner.gif'
import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div>
                <img src={spinnerImage} alt="spinnerImage"/>
            </div>
        )
    }
}

export default Spinner
