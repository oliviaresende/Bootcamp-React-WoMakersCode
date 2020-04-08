import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div style={{ padding: '20px' }}>
            <Link to={"/"}>
                <img src={logo} />
            </Link>
        </div>
    )
}

export default Header