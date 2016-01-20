import test from 'tape';
import countingDNANucleotides from '../counting-dna-nucleotides';

/*
    Problem
    A string is simply an ordered collection of symbols selected from some alphabet and formed into a word;
    the length of a string is the number of symbols that it contains.

    An example of a length 21 DNA string (whose alphabet contains the symbols 'A', 'C', 'G', and 'T') is "ATGCTTCAGAAAGGTCTTACG."

    Given: A DNA string ss of length at most 1000 nt.
    Return: Four integers (separated by spaces) counting the respective number of times that the symbols
    'A', 'C', 'G', and 'T' occur in ss.
*/

test('Counting DNA nucleotides', (t) => {
    const DNA = 'AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC';
    const actual = countingDNANucleotides(DNA);
    const expected = '20 12 17 21';
    t.equal(
        actual,
        expected,
        'Should count DNA nucleotides correctly'
    );

    t.end();
});
