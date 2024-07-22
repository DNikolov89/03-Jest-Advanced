//import axios in order to make requests
const axios = require('axios');

//import functions from swapi.js
const { getLuke } = require('../swapi');
const { afterAll } = require('jest-circus');

describe('Mocking modules with jest.mock', () => {
    describe('test the swapi real data', () => {

        beforeEach(() => {
            //Clear all existing module cache
            jest.resetModules();
        });

        it('should return Luke Skywalker name when requesting the first person', async () => {

            const expectedName = 'Luke Skywalker';
            const responseData = await getLuke();

            const responseName = responseData.name;

            expect(responseName).toEqual(expectedName);
        }, 20000);

        it('should return Luke Skywalker height when requesting the first person', async () => {

            const expectedHeight = '172';
            const responseData = await getLuke();

            const responseHeight = responseData.height;

            expect(responseHeight).toEqual(expectedHeight);
        }, 20000);

        //TODO: Add more tests based on the example result for Luke at https://swapi.dev/

    });

    describe('test the swapi with mocked data', () => {

        beforeAll(() => {
            //mock the axios in order to return mocked responses
            jest.mock('axios');
            //mock the axios.get method by using jest.fn()
            axios.get = jest.fn();
        });

        afterAll(() => {
            //clear the mocks after you are done
            jest.clearAllMocks();
        });

        it('should return the mocked name of Luke Skywalker', async () => {
            // Mock the axios module to return a mocked response
            axios.get.mockResolvedValue({ data: { name: 'Mocked Name' } });

            const expectedName = 'Mocked Name';
            const responseData = await getLuke();

            const responseName = responseData.name;

            expect(responseName).toEqual(expectedName);
        });

        it('should return the mocked height of Luke Skywalker', async () => {
            // Mock the axios module to return a mocked response
            axios.get.mockResolvedValue({ data: { height: '180' } });

            const expectedHeight = '180';
            const responseData = await getLuke();

            const responseHeight = responseData.height;

            expect(responseHeight).toEqual(expectedHeight);
        });

        //TODO: Add more test that use the mocked response from axios

    });


});
