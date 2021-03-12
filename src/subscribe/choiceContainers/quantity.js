import React from 'react';
import ArrowIcon from '../../assets/plan/desktop/icon-arrow.svg';

class Quantity extends React.Component {
	state = {
		expanded: false,
		choice: this.props.quantity,
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
		this.props.updateQuantity(value);
		this.setState({
			choice: value,
		});
	};

	componentDidUpdate = () => {
		if (this.props.bean !== '_____' && this.state.expanded === false) {
			this.setState({
				expanded: true,
			});
		}
	};

	render() {
		return (
			<div className="choice-container">
				{this.state.expanded === false ? (
					<div className="info-bar">
						<h2>How much would you like?</h2>
						<img
							src={ArrowIcon}
							alt="Arrow Icon"
							onClick={this.openChoices}
						/>
					</div>
				) : (
					<div className="spacing-div">
						<div className="info-bar">
							<h2>How much would you like?</h2>
							<img
								src={ArrowIcon}
								alt="Arrow Icon"
								className="flipped-img"
								onClick={this.closeChoices}
							/>
						</div>

						<div className="choice-large-container-div">
							{this.state.choice !== '250g' ? (
								<div
									className="choice-card"
									onClick={() => this.chooseChoice('250g')}
								>
									<div className="choice-card-text-container">
										<h4>250g</h4>
										<body>
											Perfect for the solo drinker. Yields
											about 12 delicious cups.
										</body>
									</div>
								</div>
							) : (
								<div
									className="choice-card-selected"
									onClick={() => this.chooseChoice('250g')}
								>
									<div className="choice-card-text-container">
										<h4>250g</h4>
										<body>
											Perfect for the solo drinker. Yields
											about 12 delicious cups.
										</body>
									</div>
								</div>
							)}

							{this.state.choice !== '500g' ? (
								<div
									className="choice-card"
									onClick={() => this.chooseChoice('500g')}
								>
									<div className="choice-card-text-container">
										<h4>500g</h4>
										<body>
											Perfect option for a couple. Yields
											about 40 delectable cups.
										</body>
									</div>
								</div>
							) : (
								<div
									className="choice-card-selected"
									onClick={() => this.chooseChoice('500g')}
								>
									<div className="choice-card-text-container">
										<h4>500g</h4>
										<body>
											Perfect option for a couple. Yields
											about 40 delectable cups.
										</body>
									</div>
								</div>
							)}

							{this.state.choice !== '1000g' ? (
								<div
									className="choice-card"
									onClick={() => this.chooseChoice('1000g')}
								>
									<div className="choice-card-text-container">
										<h4>1000g</h4>
										<body>
											Perfect for offices and events.
											Yields about 90 delightful cups.
										</body>
									</div>
								</div>
							) : (
								<div
									className="choice-card-selected"
									onClick={() => this.chooseChoice('1000g')}
								>
									<div className="choice-card-text-container">
										<h4>1000g</h4>
										<body>
											Perfect for offices and events.
											Yields about 90 delightful cups.
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

export default Quantity;
