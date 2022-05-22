import { combineReducers, createStore } from 'redux';
import dashboardReducer from "./dashboard/dashboard.reducer";
import employeesReducer from "./employees/employees.reducer";
import meetingsReducer from "./meetings/meeting.reducer";

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    employees: employeesReducer,
    meetings: meetingsReducer,
});

const store = createStore(rootReducer);

export default store;
