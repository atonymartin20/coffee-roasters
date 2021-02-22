import React from 'react';
import CoffeeBeanIcon from '../assets/home/desktop/icon-coffee-bean.svg';
import GiftIcon from '../assets/home/desktop/icon-gift.svg';
import TruckIcon from '../assets/home/desktop/icon-truck.svg';
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
                            <img src={GranEspressoCoffee} class='coffee-bag-img' />
                        </div>
                        <div class='coffee-description'>
                            <h3>Gran Espresso</h3>
                            Light and flavorful blend with cocoa and black pepper for an intense experience
                        </div>
                    </div>

                    <div class='coffee-type'>
                        <div class='img-box'>
                            <img src={PlanaltoCoffee} class='coffee-bag-img' />
                        </div>
                        <div class='coffee-description'>
                            <h3>Planalto</h3>
                            Brazilian dark roast with rich and velvety body, and hints of fruits and nuts
                        </div>
                    </div>

                    <div class='coffee-type'>
                        <div class='img-box'>
                            <img src={PiccolloCoffee} class='coffee-bag-img' />
                        </div>
                        <div class='coffee-description'>
                            <h3>Piccollo</h3>
                            Mild and smooth blend featuring notes of toasted almond and dried cherry
                        </div>
                    </div>

                    <div class='coffee-type'>
                        <div class='img-box'>
                            <img src={DancheCoffee} class='coffee-bag-img' />
                        </div>
                        <div class='coffee-description'>
                            <h3>Danche</h3>
                            Ethiopian hand-harvested blend densely packed with vibrant fruit notes
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Collection;