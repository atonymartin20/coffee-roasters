import React from 'react';

class CreatePlanButton extends React.Component {
	render() {
		return (
			<div className="subscribe-create-your-plan-button-div">
				<button
					className="subscribe-create-your-plan-button"
					onClick={this.props.openModal}
                    disabled={this.props.preferences === '_____' || this.props.bean === '_____' || this.props.quantity === '_____' || this.props.grind === '_____' || this.props.deliveries === '_____'}
				>
					Create your plan
				</button>
			</div>
		);
	}
}

export default CreatePlanButton;
