const axios = require('axios');
const validToken = 'AAAAEwnnKkarK2ojg8JRDVv8AoBNeHfb8oGq4LjNqRCaRVV_k';

const config = {
  headers: {
    Authorization: 'Bearer AAAAEwnnKkarK2ojg8JRDVv8AoBNeHfb8oGq4LjNqRCaRVV_k',
  },
};

const httpCalls = async (endpoint) => {
  try {
    const response = await axios.get(endpoint, config);

    return response.data;
  } catch (error) {
    return error;
  }
};

/** Retrieving network details(without gateway informatino) using roaming id as A0000019 */
const networkDetails = httpCalls(
  'https://prognostix.loriot.io/1/nwk/network/A0000019'
).then((response) => console.log(response));
// console.log(networkDetails);

/** Retrieve User gateway for EUI 70-B3-D5-CA-50-00-06-03 */
const retrieveUserGateway = httpCalls(
  'https://prognostix.loriot.io/1/nwk/gatway/70-B3-D5-CA-50-00-06-03'
).then((response) => console.log(response));
console.log(retrieveUserGateway);

///1/nwk/network/{roamingid}/gateways Register new gateway and add it to a network
/** this will need roaming id */
