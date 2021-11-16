const {
    returnTwo,
    greeting,
    add
} = require('./functions')



test('Test return 2', () => expect(returnTwo()).toEqual(2));


describe('Greeting Test', () => {
    let result = greeting('James')
    test('Greeting James', () => expect(result).toEqual('Hello, James'))
})

describe('Greeting Test', () => {
    let result = greeting('Jill')
    test('Greeting Jill', () => expect(result).toEqual('Hello, Jill'))
})




describe('Add test', () => {
    test('add test should return integer', () => {
        let result = add(1, 2)
        expect(result).toEqual(3)
    })
})

describe('Add test', () => {
    test('add test should return integer', () => {
        let result = add(5, 9)
        expect(result).toEqual(14)
    })
})