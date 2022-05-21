import { useDispatch, useSelector } from 'react-redux';
import DASHBOARD_ACTIONS from "../store/dashboard/dashboard.actions";

const useDashboard = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.dashboard.isOpen);
    const entries = useSelector(state => state.dashboard.entries);

    const toggleDashboardOpen = () => {
        dispatch({
            type: DASHBOARD_ACTIONS.TOGGLE_DRAWER,
        });
    };

    const changeSelectedEntry = index => {
        dispatch({
            type: DASHBOARD_ACTIONS.SELECT_ENTRY,
            payload: { index },
        });
    };

    return {
        isOpen,
        entries,
        toggleDashboardOpen,
        changeSelectedEntry,
    };
};

export default useDashboard;
