import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <header class='homepage-header'>
                <div class='homepage-header-text-container'>
                    <h1>Great coffee made simple.</h1>

                    <body>
                        Start your mornings with the world’s best coffees. Try our expertly curated artisan 
                        coffees from our best roasters delivered directly to your door, at your schedule.
                    </body>

                    <button>
                        <Link to='/plan'>Create your plan</Link>
                    </button>
                </div>
            </header>
        )
    }
}

export default Header;