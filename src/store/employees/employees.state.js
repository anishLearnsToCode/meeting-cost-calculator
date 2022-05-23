const data = new Map();
data.set(0, {
    id: 0,
    firstName: 'Robert',
    lastName: 'Frost',
    currency: 'chf',
    annualSalary: 60_000,
    email: 'robert_frost@gmail.com',
    isSelected: false,
});

data.set(1, {
    id: 1,
    firstName: 'Lord',
    lastName: 'Byron',
    currency: 'eur',
    annualSalary: 34_123,
    email: 'lord.byron.poetry@yahoo.com',
    isSelected: false,
});

data.set(2, {
    id: 2,
    firstName: 'Mark',
    lastName: 'Twain',
    currency: 'usd',
    annualSalary: 150_000,
    email: 'mark@outlook.com',
    isSelected: false,
});

const selectedRowIds = new Set();

const EMPLOYEES_INITIAL_STATE = {
    data,
    selectedRowIds,
    nextEmployeeId: 3,
    newEmployeeDialogIsOpen: false,
};

export default EMPLOYEES_INITIAL_STATE;
