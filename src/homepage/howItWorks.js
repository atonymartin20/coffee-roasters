import React from 'react';
import { Link } from 'react-router-dom';

class HowItWorks extends React.Component {
    render() {
        return(
            <div class='how-it-works-div'>
                <h4>How it works</h4>

                <div class='how-it-works-large-container-div'>
                    <div class='horizontal-line-div'>
                        <div class='circle-div' />
                        <div class='circle-div' />
                        <div class='circle-div' />
                    </div>

                    <div class='how-it-works-box-container-div'>
                        <div class='how-it-works-box-div'>
                            <h1>01</h1>
                            <h3>Pick your coffee</h3>
                            <body>Select from our evolving range of artisan coffees. Our beans are ethically 
                            sourced and we pay fair prices for them. There are new coffees in all profiles 
                            every month for you to try out.</body> 
                        </div>

                        <div class='how-it-works-box-div'>
                            <h1>02</h1>
                            <h3>Choose the frequency</h3>
                            <body>Customize your order frequency, quantity, even your roast style and grind type. 
                            Pause, skip or cancel your subscription with no commitment through our online portal.</body>
                        </div>

                        <div class='how-it-works-box-div'>
                            <h1>03</h1>
                            <h3>Receive and enjoy!</h3>
                            <body>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                            world-class coffees curated to provide a distinct tasting experience.</body>
                        </div>

                    </div>

                    <button>
                        <Link to='/plan'>Create your plan</Link>
                    </button>
                </div>

            </div>
        )
    }
}

export default HowItWorks;