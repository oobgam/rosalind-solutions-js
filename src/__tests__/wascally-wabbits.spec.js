import test from 'tape';
import wascallyWabbits from '../wascally-wabbits';

test('Wascally Wabbits', (t) => {
    const actual = wascallyWabbits(5, 3);
    const expected = 19;
    t.equal(
        actual,
        expected,
        'Shoulg be equal'
    );

    t.end();
});
