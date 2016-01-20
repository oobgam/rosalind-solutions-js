import test from 'tape';
import { readFileSync } from 'fs';
import getUnknownDNA from '../identifying-unknown-dna';

test('Identifying unknown DNA', (t) => {
    const input = readFileSync(`${__dirname}/../data/identifying-unknown-dna.txt`, 'utf8');
    const actual = getUnknownDNA(input);
    const expected = 'Rosalind_0808\n60.919540';

    t.equal(
        actual,
        expected,
        'Should return the name of the DNA with the highest gc content with its content'
    );

    t.end();
});
