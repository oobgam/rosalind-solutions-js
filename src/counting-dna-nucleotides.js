/*
    Return: Four integers (separated by spaces) counting the respective number of times that the symbols
    'A', 'C', 'G', and 'T' occur in ss.
*/

export default (dna) => {
    const characterCounts = Array.prototype.reduce.call(dna, (value, next) => {
        if (value[next] && value[next].count) {
            value[next] = {
                count: value[next].count += 1,
            };

            return value;
        }

        value[next] = {
            count: 1,
        };

        return value;
    }, {
        A: {},
        C: {},
        G: {},
        T: {},
    });

    return Object.keys(characterCounts).map( (key) => {
        return characterCounts[key].count;
    }).join(' ');
};
