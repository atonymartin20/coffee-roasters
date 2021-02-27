import React from 'react';
import Navbar from '../navbar';
import Header from './header.js';
import Collection from './collection.js';
import ChooseUs from './chooseUs.js';
import HowItWorks from './howItWorks.js';
import CreateYourPlanButton from './createYourPlanButton.js';
import Footer from '../footer';
import '../css/homepage.css';

class Homepage extends React.Component {
    render() {
        return(
            <div class='homepage-outside-div'>
				<Navbar />
				<Header />
				<Collection />
				<ChooseUs />
				<HowItWorks />
				<CreateYourPlanButton />
				<Footer />
            </div>
        )
    }
}

export default Homepage;