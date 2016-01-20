import countDNANucleotides from './counting-dna-nucleotides';

function withinAbsoluteError(value) {
    return (value + 0.001) < value < (value - 0.001);
}

export default (datasets) => {
    const datasetArray = datasets.split(/\n/);
    const rosalindObjects = datasetArray.map( (data) => {
        const isName = data.indexOf('>') === 0;
        if (!isName) return;

        const rosalind = {
            name: '',
            dna: '',
        };

        const adjacentStringIndex = datasetArray.indexOf(data) + 1;
        rosalind.name = data.replace('>', '');
        rosalind.dna = datasetArray[adjacentStringIndex];

        // 'A G C T' is the order it is returned
        const dnaCountArray = countDNANucleotides(rosalind.dna).split(' ');
        const total = dnaCountArray.reduce( (sum, v) => sum + +v, 0);
        const gCount = +dnaCountArray[1];
        const cCount = +dnaCountArray[2];
        const gcContent = (gCount + cCount) / total;

        Object.assign(rosalind, {
            gcContent,
            withinAbsoluteError: withinAbsoluteError(gcContent),
        });


        return rosalind;
    });

    const highestgcContent = rosalindObjects
        .filter( (obj) => obj !== undefined )
        .sort( (a, b) => a.gcContent < b.gcContent )[0];

    return `${highestgcContent.name}\n${(highestgcContent.gcContent * 100).toFixed(6)}`;
};
