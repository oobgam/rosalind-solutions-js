export default (datasets) => {
    const data = datasets.split(/\n/);
    const left = data[0].split('');
    const right = data[1].split('');

    return left.map( (v, i) => {
        return v !== right[i] ? 1 : 0;
    }).reduce( (current, val) => current + val, 0);
};
