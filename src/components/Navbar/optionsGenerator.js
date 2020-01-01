export default (text, amount) => {
    const optionsArray = [];

    for (let i = 1; i <= amount; i++) {
        optionsArray.push({
            value: i,
            label: `${text} ${i}`
        });
    }

    return optionsArray;
};
