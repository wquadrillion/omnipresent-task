import { IEmployee, IResponse } from '../interfaces/global';
import { Request, Response } from 'express';

import getEmployeesData from '../modules/getEmployeesData';

const getEmployees = async (req: Request, res: Response) => {
  try {
    const employees: IEmployee[] = req.body;
    const result: IResponse[] = await getEmployeesData(employees);
    res.status(200).send(result);
  } catch (error) {
    res.status(500);
  }
};

export default getEmployees;
