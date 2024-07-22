const sum = require('../mock');

describe('Creating Mocks with jest.fn', () => {
    describe('sum function', () => {
        it('should return the the mocked value instead of the sum', () => {
            // Mocking the sum function using jest.fn() to return 1
            let sum = jest.fn().mockReturnValue(1);

            // Calling the sum function by assigning the result to a constant
            const result = sum(2, 3);

            // Expecting the sum function to be called with the correct arguments
            expect(sum).toHaveBeenCalledWith(2, 3);

            // Expecting the result to be the mocked return value
            expect(result).toEqual(1);
        });

        it('should return the default value when sum function is not mocked', () => {
            // Calling the sum function without mocking it
            const result = sum(3, 3);

            // Expecting the result to be the default return value
            expect(result).toEqual(6);
        });

        //TODO: Play around and add more mocks - try anything (string, number, boolean, null, etc.)
    });
});