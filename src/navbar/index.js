import React from 'react';
import Logo from '../assets/shared/desktop/logo.svg';
import { NavLink } from 'react-router-dom';
import HamburgerIcon from '../assets/shared/mobile/icon-hamburger.svg';
// import CloseIcon from '../assets/shared/mobile/icon-close.svg';
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
                        {/* <div class='navbar'>
                            <img src={Logo} class='header-logo' />
                            <img src={CloseIcon} class='close' onClick={this.closeDropdown} />
                        </div>
                        <Dropdown /> */}
                        <Dropdown close={this.closeDropdown} />
                    </div> 
                :
                    <div class='navbar'>
                        <img src={Logo} class='header-logo' />
                        <nav class='header-nav'>
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
                        <img src={HamburgerIcon} class='hamburger' onClick={this.openDropdown} />
                    </div>
                }
            </>
        )
    }
}

export default Navbar;