import { useMemo, useState } from 'react';
import { evaluateExpression } from '../lib/calculator';

const initialExpression = '';

export const useCalculator = () => {
  const [expression, setExpression] = useState(initialExpression);
  const [result, setResult] = useState('0');

  const normalizedExpression = useMemo(() => expression.trim(), [expression]);

  const handlePress = (value: string) => {
    if (value === 'clear') {
      setExpression(initialExpression);
      setResult('0');
      return;
    }

    if (value === 'back') {
      setExpression((current) => current.slice(0, -1));
      return;
    }

    if (value === 'sign') {
      if (normalizedExpression.startsWith('-')) {
        setExpression(normalizedExpression.slice(1));
      } else {
        setExpression(`-${normalizedExpression}`);
      }
      return;
    }

    if (value === 'evaluate') {
      try {
        setResult(evaluateExpression(normalizedExpression));
      } catch {
        setResult('Error');
      }
      return;
    }

    setExpression((current) => `${current}${value}`);
  };

  return {
    expression,
    result,
    handlePress
  };
};
