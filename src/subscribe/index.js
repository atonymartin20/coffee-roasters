import React from 'react';
import Navbar from '../navbar';
import Header from './header.js';
import HowItWorks from './howItWorks.js';
import ChoicesContainer from './choicesContainer.js';
import SubscribeModal from './subscribeModal.js';
import Footer from '../footer';
import '../css/subscribe.css';

class Subscribe extends React.Component {
    state={
        preferences: '_____',
        bean: '_____',
        quantity: '_____',
        grind: '_____',
        deliveries: '_____',
        showModal: false,
    }

    updatePreferences = (value) => {
        this.setState({
            preferences: value,
        })
    }

    updateBean = (value) => {
        this.setState({
            bean: value,
        })
    }

    updateQuantity = (value) => {
        this.setState({
            quantity: value,
        })
    }

    updateGrind = (value) => {
        this.setState({
            grind: value
        })
    }

    updateDeliveries = (value) => {
        this.setState({
            deliveries: value,
        })
    }

    openModal = (event) => {
        event.preventDefault();
        this.setState({
            showModal: true,
        })
    }

    closeModal = (event) => {
        event.preventDefault();
        this.setState({
            showModal: false,
        })
    }

    render() {
        return(
            <div className='subscribe-outside-div'>
                {this.state.showModal ? <SubscribeModal preferences={this.state.preferences} bean={this.state.bean} quantity={this.state.quantity} grind={this.state.grind} deliveries={this.state.deliveries} closeModal={this.closeModal} /> : null }
				<Navbar />
                <Header />
                <HowItWorks />
                <ChoicesContainer preferences={this.state.preferences} updatePreferences={this.updatePreferences} bean={this.state.bean} updateBean={this.updateBean} quantity={this.state.quantity} updateQuantity={this.updateQuantity} grind={this.state.grind} updateGrind={this.updateGrind} deliveries={this.state.deliveries} updateDeliveries={this.updateDeliveries} openModal={this.openModal} />
				<Footer />
            </div>
        )
    }
}

export default Subscribe;