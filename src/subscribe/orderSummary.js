import React from 'react';

class OrderSummary extends React.Component {
    
    render() {
        if (this.props.preferences === 'Capsules') {
            return(
                <div className='order-summary-container-div'>
                    {this.props.preferences !== '_____' && this.props.bean !== '_____' ? 
                        <div className='order-summary-large-text-container'>
                            <body>Order Summary</body>
                            <h4>“I drink my coffee using <span className='styled-span'>{this.props.preferences}</span>, with a <span className='styled-span'>{this.props.bean}</span> type of bean. <span className='styled-span'>{this.props.quantity}</span>, 
                            sent to me <span className='styled-span'>{this.props.deliveries}</span>.”</h4>
                        </div>
                    :
                        <div className='order-summary-text-container'>
                            <body>Order Summary</body>
                            <h4>“I drink my coffee using <span className='styled-span'>{this.props.preferences}</span>, with a <span className='styled-span'>{this.props.bean}</span> type of bean. <span className='styled-span'>{this.props.quantity}</span> ground ala <span className='styled-span'>{this.props.grind}</span>, 
                            sent to me <span className='styled-span'>{this.props.deliveries}</span>.”</h4>
                        </div>
                    }
    
                      
                </div>
            )
        }

        else {
            return(
                <div className='order-summary-container-div'>
                    {this.props.preferences !== '_____' && this.props.bean !== '_____' ? 
                        <div className='order-summary-large-text-container'>
                            <body>Order Summary</body>
                            <h4>“I drink my coffee as <span className='styled-span'>{this.props.preferences}</span>, with a <span className='styled-span'>{this.props.bean}</span> type of bean. <span className='styled-span'>{this.props.quantity}</span> ground ala <span className='styled-span'>{this.props.grind}</span>, 
                            sent to me <span className='styled-span'>{this.props.deliveries}</span>.”</h4>
                        </div>
                    :
                        <div className='order-summary-text-container'>
                            <body>Order Summary</body>
                            <h4>“I drink my coffee as <span className='styled-span'>{this.props.preferences}</span>, with a <span className='styled-span'>{this.props.bean}</span> type of bean. <span className='styled-span'>{this.props.quantity}</span> ground ala <span className='styled-span'>{this.props.grind}</span>, 
                            sent to me <span className='styled-span'>{this.props.deliveries}</span>.”</h4>
                        </div>
                    }
    
                      
                </div>
            )
        }
    }
}

export default OrderSummary;