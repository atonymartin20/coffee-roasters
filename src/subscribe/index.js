import React from 'react';
import Navbar from '../navbar';
import Header from './header.js';
import HowItWorks from './howItWorks.js';
import ChoicesContainer from './choicesContainer.js';
import Footer from '../footer';
import '../css/subscribe.css';

class Subscribe extends React.Component {
    state={
        preferences: '_____',
        bean: '_____',
        quantity: '_____',
        grind: '_____',
        deliveries: '_____',

        // handleChange = (event, varName) => {

        // }
    }

    render() {
        return(
            <div class='subscribe-outside-div'>
				<Navbar />
                <Header />
                <HowItWorks />
                <ChoicesContainer preferences={this.state.preferences} bean={this.state.bean} quantity={this.state.quantity} grind={this.state.grind} deliveries={this.state.deliveries} />
				<Footer />
            </div>
        )
    }
}

export default Subscribe;