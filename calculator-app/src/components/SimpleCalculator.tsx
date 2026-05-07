import { useCalculator } from '../hooks/useCalculator';
import Display from './Display';
import Keypad from './Keypad';

const buttons = [
  { label: 'C', value: 'clear' },
  { label: '⌫', value: 'back' },
  { label: '%', value: '%' },
  { label: '÷', value: '/' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '×', value: '*' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '-', value: '-' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '+', value: '+' },
  { label: '+/-', value: 'sign' },
  { label: '0', value: '0' },
  { label: '.', value: '.' },
  { label: '=', value: 'evaluate', strong: true }
];

const SimpleCalculator = () => {
  const { expression, result, handlePress } = useCalculator();

  return (
    <div className="card">
      <h2 className="panel-heading">Simple Calculator</h2>
      <Display expression={expression} result={result} label="Expression" />
      <div className="control-card">
        <Keypad buttons={buttons} onPress={handlePress} />
      </div>
    </div>
  );
};

export default SimpleCalculator;
