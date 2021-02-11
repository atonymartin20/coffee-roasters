import React from 'react';
import Logo from '../assets/shared/desktop/logo.svg';
import { NavLink } from 'react-router-dom';
import FBLogo from '../assets/shared/desktop/icon-facebook.svg';
import TwitterLogo from '../assets/shared/desktop/icon-twitter.svg';
import IGLogo from '../assets/shared/desktop/icon-instagram.svg';

class Footer extends React.Component {
    render() {
        // Styling Notes
        // Desktop
            // 1280px X 120px
            // 88px bottom margin

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
                <div>
                    <img src={FBLogo} />
                    <img src={TwitterLogo} />
                    <img src={IGLogo} />
                </div>
            </div>
        )
    }
}

export default Footer;