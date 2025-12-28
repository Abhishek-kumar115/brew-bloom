import { useCountry, Country } from '@/contexts/CountryContext';

const CountrySelector = () => {
  const { country, setCountry } = useCountry();

  const handleCountryChange = (newCountry: Country) => {
    setCountry(newCountry);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleCountryChange('USA')}
        className={`w-7 h-7 rounded-full overflow-hidden transition-all duration-200 ${
          country === 'USA' ? 'ring-2 ring-primary scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'
        }`}
        title="United States"
      >
        <img src="https://flagcdn.com/us.svg" alt="USA" className="w-full h-full object-cover" />
      </button>
      <button
        onClick={() => handleCountryChange('Peru')}
        className={`w-7 h-7 rounded-full overflow-hidden transition-all duration-200 ${
          country === 'Peru' ? 'ring-2 ring-primary scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'
        }`}
        title="Peru"
      >
        <img src="https://flagcdn.com/pe.svg" alt="Peru" className="w-full h-full object-cover" />
      </button>
    </div>
  );
};

export default CountrySelector;
