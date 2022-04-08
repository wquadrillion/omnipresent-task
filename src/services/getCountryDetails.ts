import { ICountryDetails } from '../interfaces/global';
import axios from 'axios';
import client from '../utilities/redis';
import { logger } from '../utilities/logger';

const getCountryDetails = async (countryCode: string): Promise<ICountryDetails> => {
  try {
    let countryDetails;
    if ((await client.get(countryCode)) === null) {
      countryDetails = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
      await client.set(countryCode, JSON.stringify(countryDetails.data[0]));
      return {
        country: countryDetails.data[0].name.common,
        timezones: countryDetails.data[0].timezones,
        currency: countryDetails.data[0].currencies,
        languages: countryDetails.data[0].languages,
        region: countryDetails.data[0].region,
      };
    }
    countryDetails = JSON.parse(await client.get(countryCode));
    return {
      country: countryDetails.name.common,
      timezones: countryDetails.timezones,
      currency: countryDetails.currencies,
      languages: countryDetails.languages,
      region: countryDetails.region,
    };
  } catch (error) {
    logger.error(error.message);
    return {
      errorCode: 'ERR404',
      error: 'error in fetching country details',
    };
  }
};

export default getCountryDetails;
