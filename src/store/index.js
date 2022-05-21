import { combineReducers, createStore } from 'redux';
import dashboardReducer from "./dashboard/dashboard.reducer";
import employeesReducer from "./employees/employees.reducer";

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    employees: employeesReducer,
});

const store = createStore(rootReducer);

export default store;
