const { sum, rookChessObj } = require('../mock');

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

describe('Create Mocks with jest.spyOn', () => {
    describe('rookChessObj properties tests', () => {
        it('should have property type with Rook assigned to it', () => {

            // Expecting the rookChessObj to have the property type
            expect(rookChessObj).toHaveProperty('type');

            // Expecting the type to be 'Rook'
            expect(rookChessObj.type).toEqual('Rook');

        });

        it('should have property game with Chess asigned to it', () => {

            expect(rookChessObj).toHaveProperty('game');
            expect(rookChessObj.game).toEqual('Chess');
        });
    });

    describe('rookChessObj methods tests', () => {
        it('should call the moveUp method', () => {

            //create the moveUpSpy that will spy on the moveUp method of the rookChessObj
            const moveUpSpy = jest.spyOn(rookChessObj, 'moveUp');

            //call the moveUp method that is already spied on by moveUpSpy
            rookChessObj.moveUp();

            //assert that the spy method has been called
            expect(moveUpSpy).toHaveBeenCalled();
        });

        it('should log the correct string when moveUp method is called', () => {
            
            // Create a spy console.log function
            const consoleLogSpy = jest.spyOn(console, 'log');

            // Call the moveUp method
            rookChessObj.moveUp();

            // Expect the console.log function to have been called with the correct string
            expect(consoleLogSpy).toHaveBeenCalledWith('Rook moved up on the chessboard');
        });

        //TODO: Test the other methods of the chessRookObj
    })


})
