/*
    Return: The reverse complement scsc of ss.
*/

export default (dna) => {
    return Array.prototype.map.call(dna, (d) => {
        switch (d) {
        case 'A':
            return 'T';
        case 'T':
            return 'A';
        case 'C':
            return 'G';
        case 'G':
            return 'C';
        default:
            return d;
        }
    }).reverse().join('');
};
