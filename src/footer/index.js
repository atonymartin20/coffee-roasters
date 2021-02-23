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
                <img src={Logo} class='footer-logo' alt='Website Logo' />
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
                    <img src={FBLogo} class='social-logo' alt='Facebook Logo' />
                    <img src={TwitterLogo} class='twitter-logo' alt='Twitter Logo' />
                    <img src={IGLogo} class='social-logo' alt='Instagram Logo' />
                </div>
            </footer>
        )
    }
}

export default Footer;