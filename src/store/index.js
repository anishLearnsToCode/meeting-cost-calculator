import {combineReducers, createStore} from 'redux';
import dashboardReducer from "./dashboard/dashboard.reducer";

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
});

const store = createStore(rootReducer);

export default store;
