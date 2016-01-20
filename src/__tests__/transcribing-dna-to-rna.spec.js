import test from 'tape';
import transcribeDNAtoRNA from '../transcribing-dna-to-rna';

/*
    Problem
    An RNA string is a string formed from the alphabet containing 'A', 'C', 'G', and 'U'.
    Given a DNA string tt corresponding to a coding strand, its transcribed RNA string uu is formed
    by replacing all occurrences of 'T' in tt with 'U' in uu.

    Given: A DNA string tt having length at most 1000 nt.
    Return: The transcribed RNA string of tt.
*/

test('Transcribing DNA to RNA', (t) => {
    const DNA = 'GATGGAACTTGACTACGTAAATT';
    const actual = transcribeDNAtoRNA(DNA);
    const expected = 'GAUGGAACUUGACUACGUAAAUU';

    t.equal(
        actual,
        expected,
        'Should transcribe DNA to RNA correctly'
    );

    t.end();
});
