import React from 'react';
import Logo from '../assets/shared/desktop/logo.svg';
import { NavLink } from 'react-router-dom';
import HamburgerIcon from '../assets/shared/mobile/icon-hamburger.svg';
import Dropdown from './dropdown.js';

class Navbar extends React.Component {
    state={
        open: false,
    }

    openDropdown = (event) => {
        event.preventDefault();
        this.setState({
            open: !this.state.open
        })
    }

    closeDropdown = (event) => {
        event.preventDefault();
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return(
            <>
                {this.state.open ? 
                    <div>
                        <div className='nav-spacer' />
                        <Dropdown close={this.closeDropdown} />
                    </div> 
                :
                    <div className='navbar'>
                        <img src={Logo} className='header-logo' alt='Website Logo' />
                        <nav className='header-nav'>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                            <NavLink to='/about'>
                                About us
                            </NavLink>
                            <NavLink to='/plan'>
                                Create your plan
                            </NavLink>
                        </nav>
                        <img src={HamburgerIcon} className='hamburger' onClick={this.openDropdown} alt='Close Icon' />
                    </div>
                }
            </>
        )
    }
}

export default Navbar;