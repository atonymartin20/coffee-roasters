import React from 'react';
import ArrowIcon from '../../assets/plan/desktop/icon-arrow.svg';

class Preferences extends React.Component {
    state = {
        expanded: true,
        choice: this.props.preferences,
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
        this.props.updatePreferences(value)
        this.setState({
            choice: value
        })
    }
    
    render() {
        return(
            <div className='choice-container'>
                {this.state.expanded === false ? 
                    <div className='info-bar'>
                        <h2>How do you drink your coffee?</h2>
                        <img src={ArrowIcon} alt='Arrow Icon' onClick={this.openChoices} />
                    </div>
                : 
                    <div className='spacing-div'>
                        <div className='info-bar'>
                            <h2>How do you drink your coffee?</h2>
                            <img src={ArrowIcon} alt='Arrow Icon' className='flipped-img' onClick={this.closeChoices} />
                        </div>

                        <div className='choice-large-container-div'>
                            {this.state.choice !== 'Capsules' ? 
                                <div className='choice-card' onClick={() => this.chooseChoice('Capsules')}>
                                    <div className='choice-card-text-container'>
                                        <h4>Capsule</h4>
                                        <body>Compatible with Nespresso systems and similar brewers</body>
                                    </div>
                                </div>
                            :
                                <div className='choice-card-selected' onClick={() => this.chooseChoice('Capsules')}>
                                    <div className='choice-card-text-container'>
                                        <h4>Capsule</h4>
                                        <body>Compatible with Nespresso systems and similar brewers</body>
                                    </div>
                                </div>
                            }

                            {this.state.choice !== 'Filter' ? 
                                <div className='choice-card' onClick={() => this.chooseChoice('Filter')}>
                                    <div className='choice-card-text-container'>
                                        <h4>Filter</h4>
                                        <body>For pour over or drip methods like Aeropress, Chemex, and V60</body>
                                    </div>
                                </div>
                            :
                                <div className='choice-card-selected' onClick={() => this.chooseChoice('Filter')}>
                                    <div className='choice-card-text-container'>
                                        <h4>Filter</h4>
                                        <body>For pour over or drip methods like Aeropress, Chemex, and V60</body>
                                    </div>
                                </div>
                            }

                            {this.state.choice !== 'Espresso' ? 
                                <div className='choice-card' onClick={() => this.chooseChoice('Espresso')}>
                                    <div className='choice-card-text-container'>
                                        <h4>Espresso</h4>
                                        <body>Dense and finely ground beans for an intense, flavorful experience</body>
                                    </div>
                                </div>
                            :
                                <div className='choice-card-selected' onClick={() => this.chooseChoice('Espresso')}>
                                    <div className='choice-card-text-container'>
                                        <h4>Espresso</h4>
                                        <body>Dense and finely ground beans for an intense, flavorful experience</body>
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

export default Preferences;