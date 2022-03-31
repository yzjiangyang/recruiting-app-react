import './logo.less'
import logo from './logo.png'
import React from 'react'

export default function Logo(){
    return (
        <div className="logo-containter">
            <img src={ logo } alt='logo' className='logo-img' />
        </div>
    )
}