import React from 'react';
import CommitmentDesktopIMG from '../assets/about/desktop/image-commitment.jpg';
import CommitmentMobileIMG from '../assets/about/mobile/image-commitment.jpg';
import CommitmentTabletIMG from '../assets/about/tablet/image-commitment.jpg';

class Commitment extends React.Component {
    render() {
        return(
            <div className='commitment-div'>
                <img src={CommitmentDesktopIMG} className='commitment-desktop-img' alt='Man with Coffee' />
                <img src={CommitmentMobileIMG} className='commitment-mobile-img' alt='Man with Coffee' />
                <img src={CommitmentTabletIMG} className='commitment-tablet-img' alt='Man with Coffee' />


                <div className='commitment-text-div'>
                    <h2>Our commitment</h2>

                    <body>
                            We’re built on a simple mission and a commitment to doing good along the way. We want to 
                        make it easy for you to discover and brew the world’s best coffee at home. It all starts 
                        at the source. To locate the specific lots we want to purchase, we travel nearly 60 days 
                        a year trying to understand the challenges and opportunities in each of these places.
                        We collaborate with exceptional coffee growers and empower a global community of farmers 
                        through with well above fair-trade benchmarks. We also offer training, support farm community 
                        initiatives, and invest in coffee plant science. Curating only the finest blends, we roast 
                        each lot to highlight tasting profiles distinctive to their native growing region.
                    </body>
                </div>

            </div>
        )
    }
}

export default Commitment;