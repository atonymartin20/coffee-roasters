import React from 'react';
import Navbar from '../navbar';
import Header from './header.js';
import Commitment from './commitment.js';
import Quality from './quality.js';
import Headquarters from './headquarters.js';
import Footer from '../footer';
import '../css/about.css';

class About extends React.Component {
    render() {
        return(
            <div className='about-outside-div'>
				<Navbar />
                <Header />
                <Commitment />
                <Quality />
                <Headquarters />
				<Footer />
            </div>
        )
    }
}

export default About;