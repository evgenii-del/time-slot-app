import {$authHost} from './index';

export const saveSlot = (values, userId) => {
    return $authHost.post('api/v1/slot/timeslot/', {values, userId});
};
