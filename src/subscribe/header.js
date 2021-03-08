import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <header className='subscribe-header'>
                <div className='subscribe-header-text-container'>
                    <h1>Create a plan</h1>

                    <body>
                        Build a subscription plan that best fits your needs. We offer an assortment of the best 
                        artisan coffees from around the globe delivered fresh to your door.
                    </body>
                </div>
            </header>
        )
    }
}

export default Header;