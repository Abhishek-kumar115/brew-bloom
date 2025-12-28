import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Country = 'USA' | 'Peru';

interface CountryData {
  companyName: string;
  email: string;
  phone: string;
  location: string;
}

const countryData: Record<Country, CountryData> = {
  USA: {
    companyName: 'Anku Coffee LLC',
    email: 'sales@ankutec.com',
    phone: '+1 (407) 289-9119',
    location: 'United States',
  },
  Peru: {
    companyName: 'ANKU Coffee Project',
    email: 'logistica@ankutec.com',
    phone: '+51 949 353 276',
    location: 'Central Jungle, Peru',
  },
};

interface CountryContextType {
  country: Country;
  setCountry: (country: Country) => void;
  data: CountryData;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [country, setCountry] = useState<Country>('USA');

  const value = {
    country,
    setCountry,
    data: countryData[country],
  };

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};
