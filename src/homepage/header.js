import React from 'react';

class Header extends React.Component {
    render() {
        // Styling Notes
        // Desktop
						{/* Header Image 
							1280px X 600px */}
						{/* 135px bottom margin */}

                        // Header Text
                        // 493px X 367px

                        // Header Inside Text Block
                        // 493px X 255px


                        // Header Button 217px X 56px

        // Tablet
            // 688px X 270px
            // 72px bottom margin

        // Mobile
            // 327px X 345px
            // 73px bottom margin

        return(
            <header>
                  Great coffee made simple.

Start your mornings with the world’s best coffees. Try our expertly curated artisan 
coffees from our best roasters delivered directly to your door, at your schedule.

Create your plan
            </header>
        )
    }
}

export default Header;