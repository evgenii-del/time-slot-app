import { $authHost } from './index';

const saveSlot = (values, userId) => $authHost.post('api/v1/slot/timeslot/', { values, userId });

export default saveSlot;
