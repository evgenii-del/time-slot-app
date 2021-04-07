import {$authHost} from './index';

export const saveSlot = (value, userId) => {
    return $authHost.post('api/v1/slot/timeslot/', {value, userId});
};
