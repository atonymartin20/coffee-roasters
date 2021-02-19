import React from 'react';
import Logo from '../assets/shared/desktop/footer-logo.svg';
import { NavLink } from 'react-router-dom';
import FBLogo from '../assets/shared/desktop/icon-facebook.svg';
import TwitterLogo from '../assets/shared/desktop/icon-twitter.svg';
import IGLogo from '../assets/shared/desktop/icon-instagram.svg';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <img src={Logo} class='footer-logo' />
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
                <div class='social-div'>
                    <img src={FBLogo} class='social-logo' />
                    <img src={TwitterLogo} class='twitter-logo' />
                    <img src={IGLogo} class='social-logo' />
                </div>
            </footer>
        )
    }
}

export default Footer;