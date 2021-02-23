import React from 'react';
import DancheCoffee from '../assets/home/desktop/image-danche.png';
import GranEspressoCoffee from '../assets/home/desktop/image-gran-espresso.png';
import PiccolloCoffee from '../assets/home/desktop/image-piccollo.png';
import PlanaltoCoffee from '../assets/home/desktop/image-planalto.png';

class Collection extends React.Component {
    render() {
        return(
            <div class='collection-div'>
                <div class='top-div'>
                    <div class='inside-top-div'>
                        <h1 class='title-alt'>Our collection</h1>
                    </div>
                </div>

                <div class='coffee-types-div'>
                    <div class='coffee-type'>
                        <div class='img-box'>
                            <img src={GranEspressoCoffee} class='coffee-bag-img' alt='Gran Espresso Coffe Bag' />
                        </div>
                        <div class='coffee-description'>
                            <h4>Gran Espresso</h4>
                            <body>Light and flavorful blend with cocoa and black pepper for an intense experience.</body>
                        </div>
                    </div>

                    <div class='coffee-type'>
                        <div class='img-box'>
                            <img src={PlanaltoCoffee} class='coffee-bag-img' alt='Planalto Coffe Bag' />
                        </div>
                        <div class='coffee-description'>
                            <h4>Planalto</h4>
                            <body>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</body>
                        </div>
                    </div>

                    <div class='coffee-type'>
                        <div class='img-box'>
                            <img src={PiccolloCoffee} class='coffee-bag-img' alt='Piccollo Coffe Bag' />
                        </div>
                        <div class='coffee-description'>
                            <h4>Piccollo</h4>
                            <body>Mild and smooth blend featuring notes of toasted almond and dried cherry.</body>
                        </div>
                    </div>

                    <div class='coffee-type'>
                        <div class='img-box'>
                            <img src={DancheCoffee} class='coffee-bag-img' alt='Danche Coffe Bag' />
                        </div>
                        <div class='coffee-description'>
                            <h4>Danche</h4>
                            <body>Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</body>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Collection;