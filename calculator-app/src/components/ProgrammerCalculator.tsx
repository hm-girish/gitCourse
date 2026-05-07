import { useState, type ChangeEvent } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { formatProgrammerDisplay, parseProgrammerValue } from '../lib/programmer';

const digitButtons = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D' },
  { label: 'E', value: 'E' },
  { label: 'F', value: 'F' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '0', value: '0' }
];

const baseOptions = [
  { label: 'Binary', value: 2 },
  { label: 'Octal', value: 8 },
  { label: 'Decimal', value: 10 },
  { label: 'Hex', value: 16 }
] as const;

const ProgrammerCalculator = () => {
  const [base, setBase] = useState(10);
  const [value, setValue] = useState('0');

  const parsed = parseProgrammerValue(value, base);
  const formatter = formatProgrammerDisplay(parsed);

  const allowedChars = base === 16 ? /[0-9A-F]/i : base === 10 ? /[0-9]/ : base === 8 ? /[0-7]/ : /[0-1]/;

  const handlePress = (next: string) => {
    if (next === 'clear') {
      setValue('0');
      return;
    }
    if (next === 'back') {
      setValue((prev) => (prev.length <= 1 ? '0' : prev.slice(0, -1)));
      return;
    }
    if (allowedChars.test(next)) {
      setValue((prev) => (prev === '0' ? next.toUpperCase() : `${prev}${next.toUpperCase()}`));
    }
  };

  const handleBaseChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setBase(Number(event.target.value));
    setValue('0');
  };

  return (
    <div className="card">
      <h2 className="panel-heading">Programmer Calculator</h2>
      <div className="display-box">
        <p className="display-caption">Input base</p>
        <select value={base} onChange={handleBaseChange}>
          {baseOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <Display expression={value} result={formatter.decimal} label="Raw value" />
      <div className="control-card">
        <Keypad buttons={[
          { label: 'C', value: 'clear' },
          { label: '⌫', value: 'back' },
          ...digitButtons
        ]} onPress={handlePress} />
      </div>
      <div className="card" style={{ marginTop: '18px' }}>
        <h3 className="display-caption">Value conversions</h3>
        <div className="button-grid">
          <div className="display-box">
            <p className="display-caption">Binary</p>
            <p className="display-value">{formatter.binary}</p>
          </div>
          <div className="display-box">
            <p className="display-caption">Octal</p>
            <p className="display-value">{formatter.octal}</p>
          </div>
          <div className="display-box">
            <p className="display-caption">Decimal</p>
            <p className="display-value">{formatter.decimal}</p>
          </div>
          <div className="display-box">
            <p className="display-caption">Hex</p>
            <p className="display-value">{formatter.hex}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammerCalculator;
