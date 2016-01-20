/*
    http://stackoverflow.com/questions/7944239/generating-fibonacci-sequence +
    https://github.com/ldgarcia/rosalind/blob/master/FIB/solution.c
*/

export default (n, k) => {
    const population = [];
    population[0] = 0;
    population[1] = 1;

    for (let i = 2; i <= n; i++) {
        const prevPopulation = population[i - 1];
        const litter = population[i - 2] * k;
        population[i] = prevPopulation + litter;
    }

    return population[n];
};
