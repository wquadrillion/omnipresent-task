import 'dotenv/config';

import { ICountryDetails } from '../src/interfaces/global';
import getCountryDetails from '../src/services/getCountryDetails';

describe('getCountryDetails', () => {
  it('should return getCountryDetails response', async () => {
    const result: ICountryDetails = await getCountryDetails('IND');
    expect(result).toHaveProperty('country');
    expect(result).toHaveProperty('timezones');
    expect(result).toHaveProperty('languages');
    expect(result).toHaveProperty('currency');
    expect(result).toHaveProperty('region');
  });

  it('should return getCountryDetails error', async () => {
    const result: ICountryDetails = await getCountryDetails('i');
    expect(result).toMatchObject({
      errorCode: 'ERR404',
      error: 'error in fetching country details',
    });
  });
});
