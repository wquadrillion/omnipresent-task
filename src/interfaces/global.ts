interface ILanguages {
  [key: string]: string;
}

export interface ICountryDetails {
  country?: string;
  currency?: any;
  languages?: ILanguages;
  timezones?: string[];
  region?: string;
  error?: string;
  errorCode?: string;
}

export interface IEmployee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  jobTitle: string;
  company: string;
  country: string;
}

export interface IResponse extends IEmployee {
  countryDetails: ICountryDetails;
  username?: string;
}
