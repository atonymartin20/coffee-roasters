import React from 'react';
import CoffeeBeanIcon from '../assets/home/desktop/icon-coffee-bean.svg';
import GiftIcon from '../assets/home/desktop/icon-gift.svg';
import TruckIcon from '../assets/home/desktop/icon-truck.svg';

class ChooseUs extends React.Component {
    render() {
        return(
            <div class='choose-us-div'>
                <div class='choose-us-top-div'>
                    <div class='choose-us-top-text-div'>
                        <h2>Why choose us?</h2>

                        <body>
                            A large part of our role is choosing which particular coffees will be featured 
                            in our range. This means working closely with the best coffee growers to give 
                            you a more impactful experience on every level.
                        </body>
                    </div>
                </div>

                <div class='choose-us-bottom-div'>
                    <div class='green-container-div'>
                        <img src={CoffeeBeanIcon} class='choose-us-icon' alt='Coffee Bean Icon'/>
                    Best quality
                <body>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</body>
                    </div>

                    <div class='green-container-div'>
                    <img src={GiftIcon} class='choose-us-icon' alt='Gift Icon'/>

                    Exclusive benefits
                <body>Special offers and swag when you subscribe, including 30% off your first shipment.</body>
                    </div>

                    <div class='green-container-div'>
                        <img src={TruckIcon} class='choose-us-icon' alt='Truck Icon'/>

                        Free shipping 
                        <body>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</body>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChooseUs;