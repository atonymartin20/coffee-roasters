import React from 'react';
import Navbar from '../navbar';
import Header from './header.js';
import Collection from './collection.js';
import Footer from '../footer';
import '../css/homepage.css';

class Homepage extends React.Component {
    state={

    }

    render() {
		// Desktop
			// 1440px outer Width
			// 5.55555% outside container margin left and right
			// 1280 px inner width

		// Tablet
			// 768px outer width
			// 5.2083% outside container margin left and right
			// 689 inner width


		// Mobile
			// 375px outside outer width

			// 
        return(
            <div class='homepage-outside-div'>
				<Navbar />
						<Header />
						<Collection />
						{/* Header Image 
							1280px X 600px */}
						{/* 135px bottom margin */}

						{/* Coffee Section
							1111px X 525px */}
						{/* 200px bottom margin */}

						{/* Section
							1280px X 728px */}
						{/* 200px bottom margin */}

						{/* Section
							1045px X 565px */}
						{/* 60px bottom margin */}

						{/* Button left aligned
							217px X 56px */}
						{/* 200px bottom margin */}
				<Footer />
            </div>
        )
    }
}

export default Homepage;