import React from 'react';

class Collection extends React.Component {
    render() {
        return(
            <div class='collection-div'>
                <div class='top-div'>
                    <div class='inside-top-div'>
                        <h1>Our collection</h1>
                    </div>
                </div>

                <div class='coffee-types-div'>
                    <h3>Gran Espresso</h3>
                    Light and flavorful blend with cocoa and black pepper for an intense experience

                    <h3>Planalto</h3>
                    Brazilian dark roast with rich and velvety body, and hints of fruits and nuts

                    <h3>Piccollo</h3>
                    Mild and smooth blend featuring notes of toasted almond and dried cherry

                    <h3>Danche</h3>
                    Ethiopian hand-harvested blend densely packed with vibrant fruit notes
                </div>                
            </div>
        )
    }
}

export default Collection;