export const markAsSelected = (array, index) => {
    array[index].isSelected = true;
    return array;
};


export const markAllAsFalse = (array) => {
    for (let index = 0 ; index < array.length ; index++) {
        array[index].isSelected = false;
    }
    return array;
};
