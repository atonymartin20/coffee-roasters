import React from 'react';
import Logo from '../assets/shared/desktop/logo.svg';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    state={
        open: false,
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
            <div>
                <img src={Logo} />
                <nav>
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
            </div>
        )
    }
}

export default Navbar;