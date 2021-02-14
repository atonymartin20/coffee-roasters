import React from 'react';
import Logo from '../assets/shared/desktop/logo.svg';
import { NavLink } from 'react-router-dom';
import HamburgerIcon from '../assets/shared/mobile/icon-hamburger.svg';
import CloseIcon from '../assets/shared/mobile/icon-close.svg';

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
        // Styling Notes
        // Desktop
            // Total Navbar width 100% height 33px padding: 0
            // margin top and bottom 40px
            // flex align-Items: center
            // justify-content: space-between

        // Tablet
            // Total Navbar 689px X 26px
            // margin-top 40px
            // margin-bottom 52px

        // Mobile
            // Total Navbar 327px X 18px
            // Hamburger 16px X 15px

        // Logo 235 X 25
        // Nav Section 283 X 15

        return(
            <>
                {this.state.open ? 
                    <div>
                        <div class='navbar'>
                            <img src={Logo} class='header-logo' />
                            <img src={CloseIcon} class='close' onClick={this.closeDropdown} />
                        </div>
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