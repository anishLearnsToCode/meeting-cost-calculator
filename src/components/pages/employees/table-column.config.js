const EMPLOYEES_TABLE_COLUMN_CONFIG = [
    { field: 'id', headerName: 'ID', width: 70, sortable: false, },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        width: 200,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'annualSalary',
        headerName: 'Salary',
        width: 150,
        valueGetter: params => `${params.row.currency.toUpperCase()} ${params.row.annualSalary}`,
        sortComparator: (a, b) => {
            const val1 = Number(a.substring(4));
            const val2 = Number(b.substring(4));
            if (val1 === val2) return 0;
            return val1 < val2 ? -1 : 1;
        }
    },
    {
        field: 'normalizedSalary',
        headerName: 'Normalized Salary in CHF',
        width: 200,
        valueGetter: params => `CHF ${params.row.normalizedSalary}`,
        sortComparator: (a, b) => {
            const val1 = Number(a.substring(4));
            const val2 = Number(b.substring(4));
            if (val1 === val2) return 0;
            return val1 < val2 ? -1 : 1;
        }
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 150,
        sortable: false,
    },
];

export default EMPLOYEES_TABLE_COLUMN_CONFIG;
