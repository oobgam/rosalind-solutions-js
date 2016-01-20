import test from 'tape';
import getUnknownDNA from '../identifying-unknown-dna';

test('Identifying unknown DNA', (t) => {
    const input = `>Rosalind_6404
CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCCTCCCACTAATAATTCTGAGG
>Rosalind_5959
CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCTATATCCATTTGTCAGCAGACACGC
>Rosalind_0808
CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGACTGGGAACCTGCGGGCAGTAGGTGGAAT`;

    const actual = getUnknownDNA(input);
    const expected = 'Rosalind_0808\n60.919540';

    t.equal(
        actual,
        expected,
        'Should return the name of the DNA with the highest gc content with its content'
    );

    t.end();
});
