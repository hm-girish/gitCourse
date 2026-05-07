import { ConverterCategory, UnitKey } from '../types/calculator';

type ConversionMap = Record<UnitKey, (value: number) => number>;

const categoryUnits: Record<ConverterCategory, { label: string; value: UnitKey }[]> = {
  length: [
    { label: 'Meters', value: 'meters' },
    { label: 'Kilometers', value: 'kilometers' },
    { label: 'Miles', value: 'miles' }
  ],
  weight: [
    { label: 'Kilograms', value: 'kilograms' },
    { label: 'Pounds', value: 'pounds' }
  ],
  temperature: [
    { label: 'Celsius', value: 'celsius' },
    { label: 'Fahrenheit', value: 'fahrenheit' },
    { label: 'Kelvin', value: 'kelvin' }
  ]
};

const convertLength: ConversionMap = {
  meters: (v) => v,
  kilometers: (v) => v * 1000,
  miles: (v) => v * 1609.344,
  kilograms: (v) => v,
  pounds: (v) => v,
  celsius: (v) => v,
  fahrenheit: (v) => v,
  kelvin: (v) => v
};

const convertWeight: ConversionMap = {
  meters: (v) => v,
  kilometers: (v) => v,
  miles: (v) => v,
  kilograms: (v) => v,
  pounds: (v) => v * 0.45359237,
  celsius: (v) => v,
  fahrenheit: (v) => v,
  kelvin: (v) => v
};

const isLengthUnit = (unit: UnitKey): unit is 'meters' | 'kilometers' | 'miles' =>
  unit === 'meters' || unit === 'kilometers' || unit === 'miles';

const isWeightUnit = (unit: UnitKey): unit is 'kilograms' | 'pounds' =>
  unit === 'kilograms' || unit === 'pounds';

export const getCategoryUnits = (category: ConverterCategory) => categoryUnits[category];

export const convertValue = (value: number, from: UnitKey, to: UnitKey) => {
  if (from === to) {
    return value.toString();
  }

  if (from === 'celsius' || from === 'fahrenheit' || from === 'kelvin') {
    return convertTemperature(value, from, to).toFixed(4);
  }

  if (isLengthUnit(from) && isLengthUnit(to)) {
    const baseValue = convertLength[from](value);
    const target = convertLength[to](1);
    return (baseValue / target).toFixed(4);
  }

  if (isWeightUnit(from) && isWeightUnit(to)) {
    const baseValue = convertWeight[from](value);
    const target = convertWeight[to](1);
    return (baseValue / target).toFixed(4);
  }

  return '0';
};

const convertTemperature = (value: number, from: UnitKey, to: UnitKey) => {
  const celsius =
    from === 'celcius' || from === 'celsius'
      ? value
      : from === 'fahrenheit'
      ? (value - 32) * (5 / 9)
      : value - 273.15;

  if (to === 'celsius') {
    return celsius;
  }

  if (to === 'fahrenheit') {
    return celsius * (9 / 5) + 32;
  }

  return celsius + 273.15;
};
