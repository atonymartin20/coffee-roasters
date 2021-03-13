import React from 'react';
import ArrowIcon from '../../assets/plan/desktop/icon-arrow.svg';

class Deliveries extends React.Component {
	state = {
		expanded: false,
		choice: this.props.deliveries,
		pricePerEveryWeek: 0.00,
		pricePerEvery2Weeks: 0.00,
		pricePerEveryMonth: 0.00,
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

		if(this.props.quantity === '_____') {
			return null;
		}
		
		else if (this.props.quantity === '250g' && this.state.pricePerEveryWeek !== 7.20) {
			this.setState({
				pricePerEveryWeek: 7.20,
				pricePerEvery2Weeks: 9.60,
				pricePerEveryMonth: 12.00,
			})
		}

		else if (this.props.quantity === '500g' && this.state.pricePerEveryWeek !== 13.00) {
			this.setState({
				pricePerEveryWeek: 13.00,
				pricePerEvery2Weeks: 17.50,
				pricePerEveryMonth: 22.00,
			})
		}

		else if (this.props.quantity === '1000g' && this.state.pricePerEveryWeek !== 22.00) {
			this.setState({
				pricePerEveryWeek: 22.00,
				pricePerEvery2Weeks: 32.00,
				pricePerEveryMonth: 42.00,
			})
		}

		else return null;
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
							{this.state.choice !== 'Every Week' ? (
								<div
									className="choice-card"
									onClick={() =>
										this.chooseChoice('Every Week')
									}
								>
									<div className="choice-card-text-container">
										<h4>Every week</h4>
										<body>
											${this.state.pricePerEveryWeek.toFixed(2)} per shipment. Includes free
											first-class shipping.
										</body>
									</div>
								</div>
							) : (
								<div
									className="choice-card-selected"
									onClick={() =>
										this.chooseChoice('Every Week')
									}
								>
									<div className="choice-card-text-container">
										<h4>Every week</h4>
										<body>
											${this.state.pricePerEveryWeek.toFixed(2)} per shipment. Includes free
											first-class shipping.
										</body>
									</div>
								</div>
							)}

							{this.state.choice !== 'Every 2 Weeks' ? (
								<div
									className="choice-card"
									onClick={() =>
										this.chooseChoice('Every 2 Weeks')
									}
								>
									<div className="choice-card-text-container">
										<h4>Every 2 weeks</h4>
										<body>
											${this.state.pricePerEvery2Weeks.toFixed(2)} per shipment. Includes free
											priority shipping.
										</body>
									</div>
								</div>
							) : (
								<div
									className="choice-card-selected"
									onClick={() =>
										this.chooseChoice('Every 2 Weeks')
									}
								>
									<div className="choice-card-text-container">
										<h4>Every 2 weeks</h4>
										<body>
											${this.state.pricePerEvery2Weeks.toFixed(2)} per shipment. Includes free
											priority shipping.
										</body>
									</div>
								</div>
							)}

							{this.state.choice !== 'Every Month' ? (
								<div
									className="choice-card"
									onClick={() =>
										this.chooseChoice('Every Month')
									}
								>
									<div className="choice-card-text-container">
										<h4>Every month</h4>
										<body>
											${this.state.pricePerEveryMonth.toFixed(2)} per shipment. Includes free
											priority shipping.
										</body>
									</div>
								</div>
							) : (
								<div
									className="choice-card-selected"
									onClick={() =>
										this.chooseChoice('Every Month')
									}
								>
									<div className="choice-card-text-container">
										<h4>Every month</h4>
										<body>
											${this.state.pricePerEveryMonth.toFixed(2)} per shipment. Includes free
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
