import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/shared/desktop/logo.svg';
import CloseIcon from '../assets/shared/mobile/icon-close.svg';

class Dropdown extends React.Component {


    render() {
        return(
            <div class='dropdown'>
                <div class='navbar'>
                    <img src={Logo} class='header-logo' alt='Website Logo' />
                    <img src={CloseIcon} class='close' onClick={this.props.close} alt='Close Icon' />
                </div>

                <div class='dropdown-links-container'>
                    <NavLink to='/'>
                        <h4 class='dropdown-link'>Home</h4>
                    </NavLink>
                    <NavLink to='/about'>
                        <h4 class='dropdown-link'>About Us</h4>
                    </NavLink>
                    <NavLink to='/plan'>
                        <h4 class='dropdown-link'>Create Your Plan</h4>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Dropdown;