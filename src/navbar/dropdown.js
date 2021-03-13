import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/shared/desktop/logo.svg';
import CloseIcon from '../assets/shared/mobile/icon-close.svg';

class Dropdown extends React.Component {


    render() {
        return(
            <div className='dropdown'>
                <div className='navbar'>
                    <img src={Logo} className='header-logo' alt='Website Logo' />
                    <img src={CloseIcon} className='close' onClick={this.props.close} alt='Close Icon' />
                </div>

                <div className='dropdown-links-container'>
                    <NavLink to='/'>
                        <h4 className='dropdown-link'>Home</h4>
                    </NavLink>
                    <NavLink to='/about'>
                        <h4 className='dropdown-link'>About Us</h4>
                    </NavLink>
                    <NavLink to='/plan'>
                        <h4 className='dropdown-link'>Create Your Plan</h4>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Dropdown;