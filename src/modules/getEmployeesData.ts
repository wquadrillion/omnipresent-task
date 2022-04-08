/* eslint-disable no-restricted-syntax */
import { ICountryDetails, IEmployee, IResponse } from '../interfaces/global';

import getCountryDetails from '../services/getCountryDetails';
import { logger } from '../utilities/logger';

const getEmployeesData = async (employees: IEmployee[]): Promise<IResponse[]> => {
  try {
    const regions = ['asia', 'europe'];
    let username = '';
    const employeesData: IResponse[] = [];
    let employeeData: IResponse;
    for await (const employee of employees) {
      const result: ICountryDetails = await getCountryDetails(employee.country);
      if (result.errorCode && result.errorCode === 'ERR404') {
        employeeData = { ...employee, countryDetails: {} };
      } else {
        employeeData = {
          ...employee,
          countryDetails: {
            country: result.country,
            currency: result.currency,
            languages: result.languages,
            timezones: result.timezones,
          },
        };
        if (regions.includes(result.region.toLowerCase())) {
          username = `${employee.firstName}${employee.lastName}${employee.dateOfBirth.split('/').join('')}`;
          employeeData.username = username;
        }
      }
      employeesData.push(employeeData);
    }
    return employeesData;
  } catch (error) {
    logger.error(error);
    return [];
  }
};
export default getEmployeesData;
