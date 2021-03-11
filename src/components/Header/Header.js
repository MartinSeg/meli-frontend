import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../assets/Logo_ML.png';
import Search from '../../assets/ic_Search.png';

const Header = (props) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleSumit = (e) => {
       e.preventDefault();
       props.history.push(`/items?search=${inputValue}`)
       setInputValue('')
    }

    return (
        <header className='header'>
            <div className='header-menu'>
                <div className='header-menu-logo'>
                    <img 
                        src={Logo} 
                        alt='Logo'
                    />
                </div>
                <form className='header-menu-form' onSubmit={handleSumit}>
                    <input 
                        className='header-menu-form-input'
                        type='text' 
                        placeholder='Nunca dejes de buscar'
                        autoComplete='off'
                        onChange={ e => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <button 
                        className='header-menu-form-button'
                        type='submit'
                    >
                        <img  src={Search} alt='search'/>
                    </button>
                </form>
            </div>
        </header>
    )
}

export default Header
