import test from 'tape';
import complementDNAStrand from '../complementing-a-strand-of-dna';

/*
Problem
    In DNA strings, symbols 'A' and 'T' are complements of each other, as are 'C' and 'G'.
    The reverse complement of a DNA string ss is the string scsc formed by reversing the symbols of ss,
    then taking the complement of each symbol (e.g., the reverse complement of "GTCA" is "TGAC").

    Given: A DNA string ss of length at most 1000 bp.
    Return: The reverse complement scsc of ss.
*/

test('Complementing a strand of DNA', (t) => {
    const DNA = 'AAAACCCGGT';
    const actual = complementDNAStrand(DNA);
    const expected = 'ACCGGGTTTT';

    t.equal(
        actual,
        expected,
        'Should reverse and complement DNA'
    );

    t.end();
});
