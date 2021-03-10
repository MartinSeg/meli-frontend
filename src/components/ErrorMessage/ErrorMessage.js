import React from 'react'
import './ErrorMessage.scss'

const ErrorMessage = ({children}) => {
    return (
        <div className='alert'>
            {children}
        </div>
    )
}

export default ErrorMessage
