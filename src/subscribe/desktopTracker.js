import React from 'react';

class DesktopTracker extends React.Component {
    render() {
        console.log(this.props)
        return(
            <div class='subscribe-desktop-tracker-div'>
                <div class='subscribe-desktop-tracker-colored-div'>
                    <h4 class='number-h4'>01</h4>
                    <h4 class='text-h4'>Preferences</h4>
                </div>

                <div class='subscribe-desktop-tracker-grey-line-div' />

                {this.props.bean === '_____' ? 
                    <div class='subscribe-desktop-tracker-grey-div'>
                        <h4 class='number-h4'>02</h4>
                        <h4 class='text-h4'>Bean Type</h4>
                    </div>
                : 
                    <div class='subscribe-desktop-tracker-colored-div'>
                        <h4 class='number-h4'>02</h4>
                        <h4 class='text-h4'>Bean Type</h4>
                    </div>
                }

                <div class='subscribe-desktop-tracker-grey-line-div' />

                {this.props.quantity === '_____' ? 
                    <div class='subscribe-desktop-tracker-grey-div'>
                        <h4 class='number-h4'>03</h4>
                        <h4 class='text-h4'>Quantity</h4>
                    </div>
                : 
                    <div class='subscribe-desktop-tracker-colored-div'>
                        <h4 class='number-h4'>03</h4>
                        <h4 class='text-h4'>Quantity</h4>
                    </div>
                }

                <div class='subscribe-desktop-tracker-grey-line-div' />

                {this.props.grind === '_____' ? 
                    <div class='subscribe-desktop-tracker-grey-div'>
                        <h4 class='number-h4'>04</h4>
                        <h4 class='text-h4'>Grind Option</h4>
                    </div>
                : 
                    <div class='subscribe-desktop-tracker-colored-div'>
                        <h4 class='number-h4'>04</h4>
                        <h4 class='text-h4'>Grind Option</h4>
                    </div>
                }

                <div class='subscribe-desktop-tracker-grey-line-div' />

                {this.props.deliveries === '_____' ? 
                    <div class='subscribe-desktop-tracker-grey-div'>
                        <h4 class='number-h4'>05</h4>
                        <h4 class='text-h4'>Deliveries</h4>
                    </div>
                : 
                    <div class='subscribe-desktop-tracker-colored-div'>
                        <h4 class='number-h4'>05</h4>
                        <h4 class='text-h4'>Deliveries</h4>
                    </div>
                }
            </div>
        )
    }
}

export default DesktopTracker;