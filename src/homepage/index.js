import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

class Homepage extends React.Component {
    state={

    }

    render() {
        return(
            <div>
				<Navbar />
				<header>
					<div>
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
					</div>
				</header>
				<Footer />
            </div>
        )
    }
}

export default Homepage;