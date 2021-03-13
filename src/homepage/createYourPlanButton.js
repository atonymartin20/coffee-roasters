import React from 'react';
import { Link } from 'react-router-dom';

class CreateYourPlanButton extends React.Component {
    render() {
        return(
            <div className='create-your-plan-div'>
                <button className='create-your-plan-button'>
                    <Link to='/plan'>Create your plan</Link>
                </button>
            </div>
        )
    }
}

export default CreateYourPlanButton;