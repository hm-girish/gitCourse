export type CalculatorMode = 'simple' | 'scientific' | 'programmer' | 'converter';

export type ConverterCategory = 'length' | 'weight' | 'temperature';

export type UnitKey = 'meters' | 'kilometers' | 'miles' | 'kilograms' | 'pounds' | 'celsius' | 'fahrenheit' | 'kelvin';

export interface ConverterOption {
  label: string;
  value: UnitKey;
}
