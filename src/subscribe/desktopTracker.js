import React from 'react';

class DesktopTracker extends React.Component {
    render() {
        return(
            <div className='subscribe-desktop-tracker-div'>
                <div className='subscribe-desktop-tracker-colored-div'>
                    <h4 className='number-h4'>01</h4>
                    <h4 className='text-h4'>Preferences</h4>
                </div>

                <div className='subscribe-desktop-tracker-grey-line-div' />

                {this.props.bean === '_____' ? 
                    <div className='subscribe-desktop-tracker-grey-div'>
                        <h4 className='number-h4'>02</h4>
                        <h4 className='text-h4'>Bean Type</h4>
                    </div>
                : 
                    <div className='subscribe-desktop-tracker-colored-div'>
                        <h4 className='number-h4'>02</h4>
                        <h4 className='text-h4'>Bean Type</h4>
                    </div>
                }

                <div className='subscribe-desktop-tracker-grey-line-div' />

                {this.props.quantity === '_____' ? 
                    <div className='subscribe-desktop-tracker-grey-div'>
                        <h4 className='number-h4'>03</h4>
                        <h4 className='text-h4'>Quantity</h4>
                    </div>
                : 
                    <div className='subscribe-desktop-tracker-colored-div'>
                        <h4 className='number-h4'>03</h4>
                        <h4 className='text-h4'>Quantity</h4>
                    </div>
                }

                <div className='subscribe-desktop-tracker-grey-line-div' />

                {this.props.grind === '_____' ? 
                    <div className='subscribe-desktop-tracker-grey-div'>
                        <h4 className='number-h4'>04</h4>
                        <h4 className='text-h4'>Grind Option</h4>
                    </div>
                : 
                    <div className='subscribe-desktop-tracker-colored-div'>
                        <h4 className='number-h4'>04</h4>
                        <h4 className='text-h4'>Grind Option</h4>
                    </div>
                }

                <div className='subscribe-desktop-tracker-grey-line-div' />

                {this.props.deliveries === '_____' ? 
                    <div className='subscribe-desktop-tracker-grey-div'>
                        <h4 className='number-h4'>05</h4>
                        <h4 className='text-h4'>Deliveries</h4>
                    </div>
                : 
                    <div className='subscribe-desktop-tracker-colored-div'>
                        <h4 className='number-h4'>05</h4>
                        <h4 className='text-h4'>Deliveries</h4>
                    </div>
                }
            </div>
        )
    }
}

export default DesktopTracker;