import React from 'react';
import CoffeeBeanIcon from '../assets/home/desktop/icon-coffee-bean.svg';
import GiftIcon from '../assets/home/desktop/icon-gift.svg';
import TruckIcon from '../assets/home/desktop/icon-truck.svg';

class ChooseUs extends React.Component {
    render() {
        return(
            <div className='choose-us-div'>
                <div className='choose-us-top-div'>
                    <div className='choose-us-top-text-div'>
                        <h2>Why choose us?</h2>

                        <body>
                            A large part of our role is choosing which particular coffees will be featured 
                            in our range. This means working closely with the best coffee growers to give 
                            you a more impactful experience on every level.
                        </body>
                    </div>
                </div>

                <div className='choose-us-bottom-div'>
                    <div className='green-container-div'>
                        <img src={CoffeeBeanIcon} className='choose-us-coffee-icon' alt='Coffee Bean Icon'/>

                        <div className='choose-us-text-div'>
                            <h4>Best quality</h4>
                            <body>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</body>
                        </div>
                    </div>

                    <div className='green-container-div'>
                        <img src={GiftIcon} className='choose-us-gift-icon' alt='Gift Icon'/>

                        <div className='choose-us-text-div'>
                            <h4>Exclusive benefits</h4>
                            <body>Special offers and swag when you subscribe, including 30% off your first shipment.</body> 
                        </div>
                    </div>

                    <div className='green-container-div'>
                        <img src={TruckIcon} className='choose-us-truck-icon' alt='Truck Icon'/>

                        <div className='choose-us-text-div'>
                            <h4>Free shipping</h4>
                            <body>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</body>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChooseUs;