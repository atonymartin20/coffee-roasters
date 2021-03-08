import React from 'react';
import AustraliaIcon from '../assets/about/desktop/illustration-australia.svg';
import CanadaIcon from '../assets/about/desktop/illustration-canada.svg';
import UnitedKingdomIcon from '../assets/about/desktop/illustration-uk.svg';

class Headquarters extends React.Component {
    render() {
        return(
            <div className='headquarters-div'>
                <h4>Our headquarters</h4>

                <div className='headquarters-info-div'>
                    <div className='headquarters-info-box-div'>
                        <img src={UnitedKingdomIcon} alt='United Kingdom Icon' />

                        <div className='headquarters-info-textbox-div'>
                            <h3>United Kingdom</h3>
                            <body>68 Asfordby Rd<br />
                            Alcaston<br />
                            SY6 1YA<br />
                            +44 1241 918425</body>
                        </div>
                    </div>

                    <div className='headquarters-info-box-div'>
                        <img src={CanadaIcon} alt='Canada Icon' />

                        <div className='headquarters-info-textbox-div'>
                            <h3>Canada</h3>
                            <body>1528 Eglinton Avenue<br />
                            Toronto<br />
                            Ontario M4P 1A6<br />
                            +1 416 485 2997</body>
                        </div>
                    </div>

                    <div className='headquarters-info-box-div'>
                        <img src={AustraliaIcon} alt='Australia Icon' />

                        <div className='headquarters-info-textbox-div'>
                            <h3>Australia</h3>
                            <body>36 Swanston Street<br />
                            Kewell<br />
                            Victoria<br />
                            +61 4 9928 3629</body>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Headquarters;