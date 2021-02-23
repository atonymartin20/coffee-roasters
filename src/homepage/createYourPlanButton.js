import React from 'react';
import { Link } from 'react-router-dom';

class CreateYourPlanButton extends React.Component {
    render() {
        return(
            <div class='create-your-plan-div'>
                <button class='create-your-plan-button'>
                    <Link to='/plan'>Create your plan</Link>
                </button>
            </div>
        )
    }
}

export default CreateYourPlanButton;