export const cloneMap = oldMap => {
    return new Map(JSON.parse(
        JSON.stringify(Array.from(oldMap))
    ));
};
