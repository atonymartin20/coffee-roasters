import React from 'react';
import ArrowIcon from '../../assets/plan/desktop/icon-arrow.svg';

class Preferences extends React.Component {
    state = {
        expanded: true,
        choice: null,
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
        this.setState({
            choice: value
        })
    }
    
    render() {
        console.log(this.state)
        return(
            <div class='choice-container'>
                {this.state.expanded === false ? 
                    <div class='info-bar'>
                        <h2>How do you drink your coffee?</h2>
                        <img src={ArrowIcon} alt='Arrow Icon' onClick={this.openChoices} />
                    </div>
                : 
                    <div class='spacing-div'>
                        <div class='info-bar'>
                            <h2>How do you drink your coffee?</h2>
                            <img src={ArrowIcon} alt='Arrow Icon' class='flipped-img' onClick={this.closeChoices} />
                        </div>

                        <div class='choice-large-container-div'>
                            {this.state.choice !== 'Capsules' ? 
                                <div class='choice-card' onClick={() => this.chooseChoice('Capsules')}>
                                    <div class='choice-card-text-container'>
                                        <h4>Capsule</h4>
                                        <body>Compatible with Nespresso systems and similar brewers</body>
                                    </div>
                                </div>
                            :
                                <div class='choice-card-selected' onClick={() => this.chooseChoice('Capsules')}>
                                    <div class='choice-card-text-container'>
                                        <h4>Capsule</h4>
                                        <body>Compatible with Nespresso systems and similar brewers</body>
                                    </div>
                                </div>
                            }

                            {this.state.choice !== 'Filters' ? 
                                <div class='choice-card' onClick={() => this.chooseChoice('Filters')}>
                                    <div class='choice-card-text-container'>
                                        <h4>Filter</h4>
                                        <body>For pour over or drip methods like Aeropress, Chemex, and V60</body>
                                    </div>
                                </div>
                            :
                                <div class='choice-card-selected' onClick={() => this.chooseChoice('Filters')}>
                                    <div class='choice-card-text-container'>
                                        <h4>Filter</h4>
                                        <body>For pour over or drip methods like Aeropress, Chemex, and V60</body>
                                    </div>
                                </div>
                            }

                            {this.state.choice !== 'Espresso' ? 
                                <div class='choice-card' onClick={() => this.chooseChoice('Espresso')}>
                                    <div class='choice-card-text-container'>
                                        <h4>Espresso</h4>
                                        <body>Dense and finely ground beans for an intense, flavorful experience</body>
                                    </div>
                                </div>
                            :
                                <div class='choice-card-selected' onClick={() => this.chooseChoice('Espresso')}>
                                    <div class='choice-card-text-container'>
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