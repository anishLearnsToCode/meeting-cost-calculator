const data = new Map();
data.set(0, {
    id: 0,
    firstName: 'John',
    lastName: 'Doe',
    currency: 'chf',
    annualSalary: 60_000,
    email: 'john_doe@gmail.com',
    isSelected: false,
});

data.set(1, {
    id: 1,
    firstName: 'Ivica',
    lastName: 'Latta',
    currency: 'eur',
    annualSalary: 34_123,
    email: 'ivica@yahoo.com',
    isSelected: false,
});

data.set(2, {
    id: 2,
    firstName: 'Jan',
    lastName: 'Johan',
    currency: 'usd',
    annualSalary: 150_000,
    email: 'jan@outlook.com',
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
