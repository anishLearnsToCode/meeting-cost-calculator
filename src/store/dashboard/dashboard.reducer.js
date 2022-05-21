import DASHBOARD_INITIAL_STATE from './dashboard.state';
import DASHBOARD_ACTIONS from './dashboard.actions';
import { markAllAsFalse, markAsSelected } from '../../utils/array_utils';

const dashboardReducer = (state = DASHBOARD_INITIAL_STATE, action) => {
    switch (action.type) {
        case DASHBOARD_ACTIONS.TOGGLE_DRAWER: {
            return {
              ...state,
              isOpen: !state.isOpen,
            };
        }

        case DASHBOARD_ACTIONS.SELECT_ENTRY: {
            return {
                ...state,
                entries: markAsSelected(
                    markAllAsFalse([...DASHBOARD_INITIAL_STATE.entries]),
                    action.payload.index
                ),
            };
        }

        default: return state;
    }
};

export default dashboardReducer;
