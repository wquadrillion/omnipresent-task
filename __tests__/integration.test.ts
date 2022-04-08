import app from '../src/app';
import request from 'supertest';

describe('POST /employees', () => {
  it('should fetch details of employees with country details', async () => {
    const employeesData = [
      {
        firstName: 'Melissa',
        lastName: 'Mocker',
        dateOfBirth: '10/01/1982',
        jobTitle: 'Software developer',
        company: 'Mock industries',
        country: 'US',
      },
    ];
    const result = await request(app).post('/employees').send(employeesData);
    expect(result.statusCode).toEqual(200);
    expect(result.body[0]).toHaveProperty('firstName');
    expect(result.body[0]).toHaveProperty('lastName');
    expect(result.body[0]).toHaveProperty('dateOfBirth');
    expect(result.body[0]).toHaveProperty('jobTitle');
    expect(result.body[0]).toHaveProperty('company');
    expect(result.body[0]).toHaveProperty('country');
    expect(result.body[0]).toHaveProperty('countryDetails');
    expect(result.body[0].countryDetails).toHaveProperty('country');
    expect(result.body[0].countryDetails).toHaveProperty('languages');
    expect(result.body[0].countryDetails).toHaveProperty('timezones');
    expect(result.body[0].countryDetails).toHaveProperty('currency');
  });

  it('should fetch details of employees with country details', async () => {
    const employeesData = [
      {
        firstName: 'Melissa',
        lastName: 'Mocker',
        dateOfBirth: '10/01/1982',
        jobTitle: 'Software developer',
        company: 'Mock industries',
        country: 'IND',
      },
    ];
    const result = await request(app).post('/employees').send(employeesData);
    expect(result.statusCode).toEqual(200);
    expect(result.body[0]).toHaveProperty('firstName');
    expect(result.body[0]).toHaveProperty('lastName');
    expect(result.body[0]).toHaveProperty('dateOfBirth');
    expect(result.body[0]).toHaveProperty('jobTitle');
    expect(result.body[0]).toHaveProperty('company');
    expect(result.body[0]).toHaveProperty('country');
    expect(result.body[0]).toHaveProperty('countryDetails');
    expect(result.body[0]).toHaveProperty('username');
    expect(result.body[0].countryDetails).toHaveProperty('country');
    expect(result.body[0].countryDetails).toHaveProperty('languages');
    expect(result.body[0].countryDetails).toHaveProperty('timezones');
    expect(result.body[0].countryDetails).toHaveProperty('currency');
  });
});
