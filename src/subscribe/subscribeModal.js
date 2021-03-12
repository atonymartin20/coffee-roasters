import React from 'react';
import CloseIcon from '../assets/shared/mobile/icon-close-order-summary.svg';

class SubscribeModal extends React.Component {
    state={
        price: 0.00,
    }

	componentDidMount = () => {
        if (this.props.quantity === '250g') {
            if (this.props.deliveries === 'Every Week') {
                this.setState({
                    price: 28.80
                })
            }

            else if (this.props.deliveries === 'Every 2 Weeks') {
                this.setState({
                    price: 19.20
                })
            }

            else {
                this.setState({
                    price: 12.00
                })
            }
        }

        else if (this.props.quantity === '500g') {
            if (this.props.deliveries === 'Every Week') {
                this.setState({
                    price: 52.00
                })
            }

            else if (this.props.deliveries === 'Every 2 Weeks') {
                this.setState({
                    price: 35.00
                })
            }

            else {
                this.setState({
                    price: 22.00
                })
            }
        }
        
        else {
            if (this.props.deliveries === 'Every Week') {
                this.setState({
                    price: 88.00
                })
            }

            else if (this.props.deliveries === 'Every 2 Weeks') {
                this.setState({
                    price: 64.00
                })
            }

            else {
                this.setState({
                    price: 42.00
                })
            }
        }
    }
    render() {
        if (this.props.preferences === 'Capsules') {
            return(
                <div className='subscribe-modal-container'>
                    <div className='subscribe-modal-spacing-div'>
                        <div className='subscribe-modal-top-div'>
                            <h2>Order Summary</h2>
                            <img src={CloseIcon} alt='Close Icon' onClick={this.props.closeModal} />
                        </div>
                        <div className='subscribe-modal-bottom-div'>
                            <div className='subscribe-modal-bottom-div-top-portion'>
                                <h4>“I drink my coffee using <span className='styled-span'>{this.props.preferences}</span>, with a <span className='styled-span'>{this.props.bean}</span> type of bean. <span className='styled-span'>{this.props.quantity}</span>, 
                                sent to me <span className='styled-span'>{this.props.deliveries}</span>.”</h4>
                            </div>
    
                            <div className='subscribe-modal-bottom-div-middle-portion'>
                                <body>
                                    Is this correct? You can proceed to checkout or go back to plan selection if something 
                                    is off. Subscription discount codes can also be redeemed at the checkout.
                                </body>
                            </div>
                            
                            <div className='subscribe-modal-bottom-div-bottom-portion'>
                                <h3>${this.state.price.toFixed(2)} / mo</h3>
                                <button
                                    className="subscribe-modal-checkout-button"
                                    onClick={this.props.closeModal}
                                >
                                    Checkout
                                </button>
                            </div>
    
                            <button
                                className="subscribe-modal-checkout-mobile-button"
                                onClick={this.props.closeModal}
                            >
                                Checkout - ${this.state.price.toFixed(2)} / mo
                            </button>
                        </div>
                    </div>
                </div>
            )

        }

        else {
            return(
                <div className='subscribe-modal-container'>
                    <div className='subscribe-modal-spacing-div'>
                        <div className='subscribe-modal-top-div'>
                            <h2>Order Summary</h2>
                            <img src={CloseIcon} alt='Close Icon' onClick={this.props.closeModal} />
                        </div>
                        <div className='subscribe-modal-bottom-div'>
                            <div className='subscribe-modal-bottom-div-top-portion'>
                                <h4>“I drink my coffee as <span className='styled-span'>{this.props.preferences}</span>, with a <span className='styled-span'>{this.props.bean}</span> type of bean. <span className='styled-span'>{this.props.quantity}</span> ground ala <span className='styled-span'>{this.props.grind}</span>, 
                                sent to me <span className='styled-span'>{this.props.deliveries}</span>.”</h4>
                            </div>
    
                            <div className='subscribe-modal-bottom-div-middle-portion'>
                                <body>
                                    Is this correct? You can proceed to checkout or go back to plan selection if something 
                                    is off. Subscription discount codes can also be redeemed at the checkout.
                                </body>
                            </div>
                            
                            <div className='subscribe-modal-bottom-div-bottom-portion'>
                                <h3>${this.state.price} / mo</h3>
                                <button
                                    className="subscribe-modal-checkout-button"
                                    onClick={this.props.closeModal}
                                >
                                    Checkout
                                </button>
                            </div>
    
                            <button
                                className="subscribe-modal-checkout-mobile-button"
                                onClick={this.props.closeModal}
                            >
                                Checkout - ${this.state.price} / mo
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default SubscribeModal;