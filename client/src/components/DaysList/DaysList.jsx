import React from 'react';

const DaysList = ({daysArr}) => (
    <ol className="main__inner-days">
        <li>Timeslots</li>
        {daysArr.map((day) => <li key={day}>{day}</li>)}
    </ol>
);

export default DaysList;
