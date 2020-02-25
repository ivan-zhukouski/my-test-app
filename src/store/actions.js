import { ACTION_SELECT_SINGER } from '../index.js'
export const actionSelectSinger =(newSelect) => {
    return {
        type: ACTION_SELECT_SINGER,
        payload: newSelect
    }
};
