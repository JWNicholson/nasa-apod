import React from 'react';

import DatePicker from 'react-datepicker';

import './DateSelector.css';

const DateSelector = props => {
    return (
        <DatePicker onChange={e => props.updateStartDate(e.target.value)} />
    )
};

export default DateSelector;