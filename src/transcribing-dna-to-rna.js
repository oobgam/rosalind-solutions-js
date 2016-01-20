/*
    Return: The transcribed RNA string of tt.
*/

export default (dna) => {
    return dna.replace(/T/g, 'U');
};
