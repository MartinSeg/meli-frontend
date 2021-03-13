import React from 'react'
import './ErrorMessage.scss'

const ErrorMessage = ({children}) => {
    return (
        <div className='alert' data-test='messageBoxContainer'>
            {children}
        </div>
    )
}

export default ErrorMessage
