import React, {useRef, useState, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {DaysList, TimesList} from '../../components';
import {clearUser} from '../../store/actions';
import {saveSlot} from '../../http/slotApi';

const Main = () => {
    const dispatch = useDispatch();
    const {daysArr, timesArr, user} = useSelector((state) => state);
    const ref = useRef();
    const finishSelectRef = useRef();

    const [activeSelect, setActiveSelect] = useState(false);
    const [startSelect, setStartSelect] = useState();
    const [finishSelect, setFinishSelect] = useState();
    const [remove, setRemove] = useState();

    const logOut = () => {
        dispatch(clearUser());
    };

    const changeSection = useCallback((e) => {
        const id = e.target.dataset.id;
        if (finishSelectRef.current !== id) {
            setFinishSelect(id);
            finishSelectRef.current = id;
        }
    }, []);

    const selectSlot = (e) => {
        if (activeSelect) {
            setFinishSelect(e.target.dataset.id);
            ref.current.removeEventListener('mousemove', changeSection);
            setActiveSelect(false);
            setRemove(false);
        } else {
            if (e.target.classList.contains('active')) {
                setRemove(true);
            }
            setStartSelect(e.target.dataset.id);
            ref.current.addEventListener('mousemove', changeSection);
            setActiveSelect(true);
        }
    };

    const saveSlots = () => {
        const items = ref.current.querySelectorAll('.active');
        const newItems = [...items].map((item) => item.dataset.id);
        saveSlot(JSON.stringify(newItems), user.id);
        alert('Data was saved!');
    };

    useEffect(() => {
        const items = ref.current.querySelectorAll('.main__table-item');
        items.forEach((item) => {
            if (startSelect && finishSelect) {
                const [startDay, startTime] = startSelect.split('-').map(Number);
                const [endDay, endTime] = finishSelect.split('-').map(Number);
                const [itemDay, itemTime] = item.dataset.id.split('-').map(Number);

                const isFirstPos = startTime <= endTime && itemTime >= startTime && itemTime <= endTime;
                const isSecondPos = startTime > endTime && itemTime <= startTime && itemTime >= endTime;
                const isThirdPos = startDay <= endDay && itemDay >= startDay && itemDay <= endDay;
                const isFourthPos = startDay > endDay && itemDay <= startDay && itemDay >= endDay;

                if (isFirstPos || isSecondPos) {
                    if (isThirdPos || isFourthPos) {
                        if (remove) {
                            item.classList.remove('active');
                        } else {
                            item.classList.add('active');
                        }
                    }
                }
            }
        });
    }, [finishSelect]);

    return (
        <div className="main">
            <div className="main__header d-flex justify-content-between">
                <h1 className="main__title">Hi test. Please select timeslot</h1>
                <button className="btn btn-primary" type="button" onClick={logOut}>Log out</button>
            </div>
            <div className="main__inner">
                <DaysList daysArr={daysArr}/>
                <div className="main__content" onClick={selectSlot}>
                    <TimesList timesArr={timesArr}/>
                    <div className="main__table" ref={ref}>
                        {
                            daysArr.map((day) => timesArr.map((time) => <div
                                className={`main__table-item`}
                                data-id={`${day.id}-${time}`}
                                key={`${day.id}-${time}`}/>))
                        }
                    </div>
                </div>
            </div>
            <button className="w-100 btn btn-primary mt-3" type="button" onClick={saveSlots}>Save</button>
        </div>
    );
}

export default Main;
