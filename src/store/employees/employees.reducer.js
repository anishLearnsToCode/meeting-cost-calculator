import EMPLOYEES_INITIAL_STATE from "./employees.state";
import EMPLOYEES_ACTIONS from "./employees.actions";
import {cloneMap} from "../../utils/clone_utils";

const employeesReducer = (state = EMPLOYEES_INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_ACTIONS.TOGGLE_ROW: {
            const set = new Set(state.selectedRowIds);
            if (set.has(action.payload.employeeId)) {
                set.delete(action.payload.employeeId);
            } else {
                set.add(action.payload.employeeId);
            }
            return {
                ...state,
                selectedRowIds: set,
            };
        }

        case EMPLOYEES_ACTIONS.REMOVE_EMPLOYEES: {
            const data = cloneMap(state.data);
            for (let employeeId of state.selectedRowIds) {
                data.delete(employeeId);
            }
            return {
                ...state,
                data,
                selectedRowIds: new Set(),
            };
        }

        default: return state;
    }
};

export default employeesReducer;
