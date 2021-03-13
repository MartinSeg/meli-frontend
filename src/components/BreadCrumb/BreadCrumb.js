import React from 'react'
import './BreadCrumb.scss'

const BreadCrumb = ({breadCrumb}) => {
    return (
        <div className='breadCrumb'>
            <ul>
                {breadCrumb && breadCrumb.map( category => (
                    <li key={category}>
                        <span className='breadCrumb_category'> {category} </span>
                        <span className='breadCrumb_sign'> {'>'} </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BreadCrumb
