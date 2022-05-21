import {styled} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {closedMixin, openedMixin} from "../mixins";

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, drawerwidth }) => ({
        width: drawerwidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme, drawerwidth),
            '& .MuiDrawer-paper': openedMixin(theme, drawerwidth),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default Drawer;
