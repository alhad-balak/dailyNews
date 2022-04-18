import spinnerImage from './spinner.gif'
import React from 'react'

export default function Spinner() {
    return (
        <div className='my-2 text-center'>
            <img src={spinnerImage} alt="spinnerImage" />
        </div>
    )
}

