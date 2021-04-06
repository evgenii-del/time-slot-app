import React, {useRef} from 'react';
import {DaysList, TimesList} from "../../components";

const daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const timesArr = [...Array(24).keys()].map(i => i + 1);

const Main = () => {
    const ref = useRef();

    const logOut = () => {
        console.log('logOut')
    };

    return (
        <div className="main">
            <div className="main__header d-flex justify-content-between">
                <h1 className="main__title">Hi test. Please select timeslot</h1>
                <button className="btn btn-primary" type="button" onClick={logOut}>Log out</button>
            </div>
            <div className="main__inner">
                <DaysList daysArr={daysArr}/>
                <div className="main__content">
                    <TimesList timesArr={timesArr}/>
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
