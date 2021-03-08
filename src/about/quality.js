import React from 'react';
import QualityDesktopIMG from '../assets/about/desktop/image-quality.jpg';
import QualityMobileIMG from '../assets/about/mobile/image-quality.jpg';
import QualityTabletIMG from '../assets/about/tablet/image-quality.jpg';

class Quality extends React.Component {
	render() {
		return (
			<div class="quality-div">
				<div class="quality-background-div">
					<div class="quality-text-div">
						<h2>Uncompromising quality</h2>

						<body>
							Although we work with growers who pay close
							attention to all stages of harvest and processing,
							we employ, on our end, a rigorous quality control
							program to avoid over-roasting or baking the coffee
							dry. Every bag of coffee is tagged with a roast date
							and batch number. Our goal is to roast consistent,
							user-friendly coffee, so that brewing is easy and
							enjoyable.
						</body>
					</div>
				</div>

                <img src={QualityDesktopIMG} className='quality-desktop-img' alt='Coffee Cup' />
                <img src={QualityTabletIMG} className='quality-tablet-img' alt='Coffee Cup' />
                <img src={QualityMobileIMG} className='quality-mobile-img' alt='Coffee Cup' />
			</div>
		);
	}
}

export default Quality;
