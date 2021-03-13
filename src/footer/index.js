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
                <img src={Logo} className='footer-logo' alt='Website Logo' />
                <nav>
                    <NavLink to='/' className='footer-a'>
                        Home
                    </NavLink>
                    <NavLink to='/about' className='footer-a'>
                        About us
                    </NavLink>
                    <NavLink to='/plan' className='footer-a'>
                        Create your plan
                    </NavLink>
                </nav>
                <div className='social-div'>
                    <img src={FBLogo} className='social-logo' alt='Facebook Logo' />
                    <img src={TwitterLogo} className='twitter-logo' alt='Twitter Logo' />
                    <img src={IGLogo} className='social-logo' alt='Instagram Logo' />
                </div>
            </footer>
        )
    }
}

export default Footer;