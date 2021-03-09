import React from 'react';
import DesktopTracker from './desktopTracker.js';
import Preferences from './choiceContainers/preferences.js';
import BeanType from './choiceContainers/beanType.js';
import Quantity from './choiceContainers/quantity.js';
import GrindOption from './choiceContainers/grindOption.js';
import Deliveries from './choiceContainers/deliveries.js';
import OrderSummary from './orderSummary.js';
import CreatePlanButton from './createPlanButton.js';

class ChoicesContainer extends React.Component {
    render() {
        return(
            <div className='subscribe-choices-container-div'>
                <DesktopTracker preferences={this.props.preferences} bean={this.props.bean} quantity={this.props.quantity} grind={this.props.grind} deliveries={this.props.deliveries}/>

                <div className='subscribe-choices-right-container-div'>
                    <Preferences preferences={this.props.preferences} updatePreferences={this.props.updatePreferences} />
                    <BeanType preferences={this.props.preferences} bean={this.props.bean} updateBean={this.props.updateBean} />
                    <Quantity bean={this.props.bean} quantity={this.props.quantity} updateQuantity={this.props.updateQuantity} />
                    <GrindOption quantity={this.props.quantity} grind={this.props.grind} updateGrind={this.props.updateGrind} />
                    <Deliveries grind={this.props.grind} deliveries={this.props.deliveries} updateDeliveries={this.props.updateDeliveries} />
                    <OrderSummary preferences={this.props.preferences} bean={this.props.bean} quantity={this.props.quantity} grind={this.props.grind} deliveries={this.props.deliveries} />
                    <CreatePlanButton preferences={this.props.preferences} bean={this.props.bean} quantity={this.props.quantity} grind={this.props.grind} deliveries={this.props.deliveries} openModal={this.props.openModal} />
                </div>
            </div>
        )
    }
}

export default ChoicesContainer;