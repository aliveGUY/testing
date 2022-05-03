const Calculate = require('./calculate');
const Task = require('./index');

it('String has proper length', () => {
    const task = new Task('12345');
    expect(task.stringLength()).toBe(5);
})

it('String is null', () => {
    const task = new Task('');
    expect(task.stringLength()).toBe('length 0');
})

it('String is too large', () => {
    const task = new Task('12345678910');
    expect(task.stringLength()).toBe('out of index range');
})

it('String is too large', () => {
    const task = new Task('12345');
    expect(task.reverseString()).toBe('54321');
})

describe('Calculator', () => {
    it('Add', () => {
        const calc = new Calculate();
        expect(calc.add(2,2)).toBe(4);
    })
    
    it('Addsubstract', () => {
        const calc = new Calculate();
        expect(calc.substract(2,2)).toBe(0);
    })
    
    it('Divide', () => {
        const calc = new Calculate();
        expect(calc.divide(2,2)).toBe(1);
    })
    
    it('Multiply', () => {
        const calc = new Calculate();
        expect(calc.multiply(2,2)).toBe(4);
    })
})

it('Capitalizing is working', () => {
    expect(capitalize('abc')).toBe('ABC');
})

function capitalize(string){
    return string.toUpperCase();
}

