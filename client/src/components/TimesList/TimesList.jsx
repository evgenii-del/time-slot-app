import React from 'react';

const TimesList = ({ timesArr }) => (
  <ol className="main__inner-times">
    {timesArr.map((time) => <li key={time}>{time}</li>)}
  </ol>
);

export default TimesList;
