import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useEmployees from "../../hooks/useEmployees.hook";


const Table = ({ rows, columns, onCellClick }) => {
    return (
        <div style={{width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight={true}
                disableExtendRowFullWidth={false}
                checkboxSelection
                onCellClick={event => onCellClick(event)}
            />
        </div>
    );
};

export default Table;
