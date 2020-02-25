import {ACTION_SELECT_SINGER} from '../index'

const initialState = {
    selectedSinger: 'Eminem'
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SELECT_SINGER:
            return {...state, selectedSinger: action.payload}
    }
    return state
};
