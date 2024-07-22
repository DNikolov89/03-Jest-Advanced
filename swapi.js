const axios = require('axios');
const baseUrl = 'https://swapi.dev/api';


async function getLuke() {

    try {

        const response = await axios.get(`${baseUrl}/people/1`);
        return response.data;
    
    } catch (error) {
        console.error(error);
    };
    
};

getLuke();

module.exports = {
    getLuke
};