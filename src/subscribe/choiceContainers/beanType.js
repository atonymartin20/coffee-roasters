import React from 'react';
import ArrowIcon from '../../assets/plan/desktop/icon-arrow.svg';

class BeanType extends React.Component {
	state = {
		expanded: false,
		choice: this.props.bean,
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
		this.props.updateBean(value);
		this.setState({
			choice: value,
		});
	};

	componentDidUpdate = () => {
		if (
			this.props.preferences !== '_____' &&
			this.state.expanded === false
		) {
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
						<h2>What type of coffee?</h2>
						<img
							src={ArrowIcon}
							alt="Arrow Icon"
							onClick={this.openChoices}
						/>
					</div>
				) : (
					<div className="spacing-div">
						<div className="info-bar">
							<h2>What type of coffee?</h2>
							<img
								src={ArrowIcon}
								alt="Arrow Icon"
								className="flipped-img"
								onClick={this.closeChoices}
							/>
						</div>

						<div className="choice-large-container-div">
							{this.state.choice !== 'Single Origin' ? (
								<div
									className="choice-card"
									onClick={() =>
										this.chooseChoice('Single Origin')
									}
								>
									<div className="choice-card-text-container">
										<h4>Single Origin</h4>
										<body>
											Distinct, high quality coffee from a
											specific family-owned farm
										</body>
									</div>
								</div>
							) : (
								<div
									className="choice-card-selected"
									onClick={() =>
										this.chooseChoice('Single Origin')
									}
								>
									<div className="choice-card-text-container">
										<h4>Single Origin</h4>
										<body>
											Distinct, high quality coffee from a
											specific family-owned farm
										</body>
									</div>
								</div>
							)}

							{this.state.choice !== 'Decaf' ? (
								<div
									className="choice-card"
									onClick={() => this.chooseChoice('Decaf')}
								>
									<div className="choice-card-text-container">
										<h4>Decaf</h4>
										<body>
											Just like regular coffee, except the
											caffeine has been removed
										</body>
									</div>
								</div>
							) : (
								<div
									className="choice-card-selected"
									onClick={() => this.chooseChoice('Decaf')}
								>
									<div className="choice-card-text-container">
										<h4>Decaf</h4>
										<body>
											Just like regular coffee, except the
											caffeine has been removed
										</body>
									</div>
								</div>
							)}

							{this.state.choice !== 'Blended' ? (
								<div
									className="choice-card"
									onClick={() => this.chooseChoice('Blended')}
								>
									<div className="choice-card-text-container">
										<h4>Blended</h4>
										<body>
											Combination of two or three dark
											roasted beans of organic coffees
										</body>
									</div>
								</div>
							) : (
								<div
									className="choice-card-selected"
									onClick={() => this.chooseChoice('Blended')}
								>
									<div className="choice-card-text-container">
										<h4>Blended</h4>
										<body>
											Combination of two or three dark
											roasted beans of organic coffees
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

export default BeanType;
