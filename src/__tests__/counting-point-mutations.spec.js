import test from 'tape';
import countPointMutations from '../counting-point-mutations';

test('Counting Point Mutations', (t) => {
    const input = `GAGCCTACTAACGGGAT\nCATCGTAATGACGGCCT`;
    const actual = countPointMutations(input);
    const expected = 7;

    t.equal(
        actual,
        expected,
        'Should return the correct number of mutations'
    );

    t.end();
});
