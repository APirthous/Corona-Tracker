import React from 'react';
import Card from './Card';
import NumberFormat from 'react-number-format';

const Covid = (props) => {

    const {
        totalConfirmed,
        totalRecovered,
        totalDeaths,
        country
    } = props;
    return (
        <div>
            <div>
                <h1 style={{ textTransform: 'capitalize' }}>{country === '' ? 'World corona report' : country}</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Card>
                        <span>Total Confirmed</span><br />
                        <span>
                            {<NumberFormat
                                value={totalConfirmed}
                                displayType={'text'}
                                thousandSeparetor={true}
                            />}
                        </span>
                    </Card>
                    <Card>
                        <span>Total Recovered</span><br />
                        <span>
                            {<NumberFormat
                                value={totalRecovered}
                                displayType={'text'}
                                thousandSeparetor={true}
                            />}
                        </span>
                    </Card>
                    <Card>
                        <span>Total Deaths</span><br />
                        <span>
                            {<NumberFormat
                                value={totalDeaths}
                                displayType={'text'}
                                thousandSeparetor={true}
                            />}</span>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default Covid
