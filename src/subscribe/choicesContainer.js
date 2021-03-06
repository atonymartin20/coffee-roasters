import React from 'react';
import DesktopTracker from './desktopTracker.js';
import Preferences from './choiceContainers/preferences.js';
import BeanType from './choiceContainers/beanType.js';
import Quantity from './choiceContainers/quantity.js';
import GrindOption from './choiceContainers/grindOption.js';
import Deliveries from './choiceContainers/deliveries.js';

class ChoicesContainer extends React.Component {
    render() {
        return(
            <div class='subscribe-choices-container-div'>
                <DesktopTracker preferences={this.props.preferences} bean={this.props.bean} quantity={this.props.quantity} grind={this.props.grind} deliveries={this.props.deliveries}/>

                <div class='subscribe-choices-right-container-div'>
                    <Preferences />
                    <BeanType />
                    <Quantity />
                    <GrindOption />
                    <Deliveries />
                </div>
            </div>
        )
    }
}

export default ChoicesContainer;