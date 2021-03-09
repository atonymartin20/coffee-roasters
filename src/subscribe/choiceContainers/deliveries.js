import React from 'react';
import ArrowIcon from '../../assets/plan/desktop/icon-arrow.svg';

class Deliveries extends React.Component {
	state = {
		expanded: false,
		choice: this.props.deliveries,
	};

	openChoices = (event) => {
		event.preventDefault();
		this.setState({
			expanded: true,
		});
	};

	closeChoices = (event) => {
		event.preventDefault();
		this.setState({
			expanded: false,
		});
	};

	chooseChoice = (value) => {
		this.props.updateDeliveries(value);
		this.setState({
			choice: value,
		});
	};

	componentDidUpdate = () => {
		if(this.props.preferences === 'Capsules') {
			if (this.props.quantity !== '_____' && this.state.expanded === false) {
				this.setState({
					expanded: true,
				});
			}
		}

		else {
			if (this.props.grind !== '_____' && this.state.expanded === false) {
				this.setState({
					expanded: true,
				});
			}
		}
	};

	render() {
		return (
			<div className="choice-container">
				{this.state.expanded === false ? (
					<div className="info-bar">
						<h2>How often should we deliver?</h2>
						<img
							src={ArrowIcon}
							alt="Arrow Icon"
							onClick={this.openChoices}
						/>
					</div>
				) : (
					<div className="spacing-div">
						<div className="info-bar">
							<h2>How often should we deliver?</h2>
							<img
								src={ArrowIcon}
								alt="Arrow Icon"
								className="flipped-img"
								onClick={this.closeChoices}
							/>
						</div>

						<div className="choice-large-container-div">
							{this.state.choice !== 'Every week' ? (
								<div
									className="choice-card"
									onClick={() =>
										this.chooseChoice('Every week')
									}
								>
									<div className="choice-card-text-container">
										<h4>Every week</h4>
										<body>
											$14.00 per shipment. Includes free
											first-class shipping.
										</body>
									</div>
								</div>
							) : (
								<div
									className="choice-card-selected"
									onClick={() =>
										this.chooseChoice('Every week')
									}
								>
									<div className="choice-card-text-container">
										<h4>Every week</h4>
										<body>
											$14.00 per shipment. Includes free
											first-class shipping.
										</body>
									</div>
								</div>
							)}

							{this.state.choice !== 'Every 2 weeks' ? (
								<div
									className="choice-card"
									onClick={() =>
										this.chooseChoice('Every 2 weeks')
									}
								>
									<div className="choice-card-text-container">
										<h4>Every 2 weeks</h4>
										<body>
											$17.25 per shipment. Includes free
											priority shipping.
										</body>
									</div>
								</div>
							) : (
								<div
									className="choice-card-selected"
									onClick={() =>
										this.chooseChoice('Every 2 weeks')
									}
								>
									<div className="choice-card-text-container">
										<h4>Every 2 weeks</h4>
										<body>
											$17.25 per shipment. Includes free
											priority shipping.
										</body>
									</div>
								</div>
							)}

							{this.state.choice !== 'Every month' ? (
								<div
									className="choice-card"
									onClick={() =>
										this.chooseChoice('Every month')
									}
								>
									<div className="choice-card-text-container">
										<h4>Every month</h4>
										<body>
											$22.50 per shipment. Includes free
											priority shipping.
										</body>
									</div>
								</div>
							) : (
								<div
									className="choice-card-selected"
									onClick={() =>
										this.chooseChoice('Every month')
									}
								>
									<div className="choice-card-text-container">
										<h4>Every month</h4>
										<body>
											$22.50 per shipment. Includes free
											priority shipping.
										</body>
									</div>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Deliveries;
