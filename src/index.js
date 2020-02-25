import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { rootReducer } from './store/reducers'

export const ACTION_SELECT_SINGER = 'ACTION_SELECT_SINGER';

const store = createStore(rootReducer);

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        selectedSinger: state.selectedSinger
    }
};
const WrappedAppComponent = connect(mapStateToProps)(App);

ReactDOM.render(<Provider store={store}>
    <WrappedAppComponent/>
</Provider> , document.getElementById('root'));

