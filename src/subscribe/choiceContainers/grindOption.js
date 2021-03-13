import React from 'react';
import ArrowIcon from '../../assets/plan/desktop/icon-arrow.svg';

class GrindOption extends React.Component {
    state = {
        expanded: false,
        choice: this.props.grind,
    }

    openChoices = (event) => {
        event.preventDefault();
        this.setState({
            expanded: true,
        })
    }

    closeChoices = (event) => {
        event.preventDefault();
        this.setState({
            expanded: false,
        })
    }

    chooseChoice = (value) => {
        this.props.updateGrind(value)
        this.setState({
            choice: value
        })
    }

    componentDidUpdate = () => {
		if(this.props.preferences !== 'Capsules') {
			if(this.props.quantity !== '_____' && this.state.expanded === false) {
				this.setState({
					expanded: true,
				})
			}
		}
    }

    render() {
		if (this.props.preferences === 'Capsules') {
			return (
				<div className='choice-container'>
					<div className='info-bar-disabled'>
						<h2>Want us to grind them?</h2>
						<img src={ArrowIcon} alt='Arrow Icon' />
					</div>
				</div>
			)
		}
		
		else {
			return (
				<div className='choice-container'>
					{this.state.expanded === false ? 
						<div className='info-bar'>
							<h2>Want us to grind them?</h2>
							<img src={ArrowIcon} alt='Arrow Icon' onClick={this.openChoices} />
						</div>
					: 
						<div className='spacing-div'>
							<div className='info-bar'>
								<h2>Want us to grind them?</h2>
								<img src={ArrowIcon} alt='Arrow Icon' className='flipped-img' onClick={this.closeChoices} />
							</div>

							<div className='choice-large-container-div'>
								{this.state.choice !== 'Wholebean' ? 
									<div className='choice-card' onClick={() => this.chooseChoice('Wholebean')}>
										<div className='choice-card-text-container'>
											<h4>Wholebean</h4>
											<body>Best choice if you cherish the full sensory experience</body>
										</div>
									</div>
								:
									<div className='choice-card-selected' onClick={() => this.chooseChoice('Wholebean')}>
										<div className='choice-card-text-container'>
											<h4>Wholebean</h4>
											<body>Best choice if you cherish the full sensory experience</body>
										</div>
									</div>
								}

								{this.state.choice !== 'Filter' ? 
									<div className='choice-card' onClick={() => this.chooseChoice('Filter')}>
										<div className='choice-card-text-container'>
											<h4>Filter</h4>
											<body>For drip or pour-over coffee methods such as V60 or Aeropress</body>
										</div>
									</div>
								:
									<div className='choice-card-selected' onClick={() => this.chooseChoice('Filter')}>
										<div className='choice-card-text-container'>
											<h4>Filter</h4>
											<body>For drip or pour-over coffee methods such as V60 or Aeropress</body>
										</div>
									</div>
								}

								{this.state.choice !== 'Cafetiére' ? 
									<div className='choice-card' onClick={() => this.chooseChoice('Cafetiére')}>
										<div className='choice-card-text-container'>
											<h4>Cafetiére</h4>
											<body>Course ground beans specially suited for french press coffee</body>
										</div>
									</div>
								:
									<div className='choice-card-selected' onClick={() => this.chooseChoice('Cafetiére')}>
										<div className='choice-card-text-container'>
											<h4>Cafetiére</h4>
											<body>Course ground beans specially suited for french press coffee</body>
										</div>
									</div>
								}
							</div>
						</div>
					}
				</div>
			)
		}
    }
}

export default GrindOption;