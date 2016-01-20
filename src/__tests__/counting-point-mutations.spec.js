import test from 'tape';
import { readFileSync } from 'fs';
import countPointMutations from '../counting-point-mutations';

test('Counting Point Mutations', (t) => {
    const input = readFileSync(`${__dirname}/../data/counting-point-mutations.txt`, 'utf8');
    const actual = countPointMutations(input);
    const expected = 7;

    t.equal(
        actual,
        expected,
        'Should return the correct number of mutations'
    );

    t.end();
});
