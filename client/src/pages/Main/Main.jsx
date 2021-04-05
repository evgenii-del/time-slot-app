import React, {useRef} from 'react';

const daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const timesArr = [...Array(24).keys()].map(i => i + 1);

const Main = () => {
    const ref = useRef();

    return (
        <div className="main">
            <h1 className="main__title">Hi test. Please select timeslot</h1>
            <div className="main__inner">
                <ol className="main__inner-days">
                    <li>Timeslots</li>
                    {daysArr.map((day) => <li key={day}>{day}</li>)}
                </ol>
                <div className="main__content">
                    <ol className="main__inner-times">
                        {timesArr.map((time) => <li key={time}>{time}</li>)}
                    </ol>
                    <div className="main__table" ref={ref}>
                        {
                            daysArr.map((day) => timesArr.map((time) => <div
                                className={`main__table-item`}
                                key={`${day}-${time}`}/>))
                        }
                    </div>
                </div>
            </div>
            <button className="w-100 btn btn-primary mt-3" type="button">Save</button>
        </div>
    );
}

export default Main;
