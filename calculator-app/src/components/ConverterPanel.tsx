import { useState } from 'react';
import { ConverterCategory, UnitKey } from '../types/calculator';
import { convertValue, getCategoryUnits } from '../lib/converters';

const categories: { label: string; value: ConverterCategory }[] = [
  { label: 'Length', value: 'length' },
  { label: 'Weight', value: 'weight' },
  { label: 'Temperature', value: 'temperature' }
];

const ConverterPanel = () => {
  const [category, setCategory] = useState<ConverterCategory>('length');
  const [fromUnit, setFromUnit] = useState<UnitKey>('meters');
  const [toUnit, setToUnit] = useState<UnitKey>('kilometers');
  const [value, setValue] = useState('1');

  const units = getCategoryUnits(category);
  const output = convertValue(Number(value) || 0, fromUnit, toUnit);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextCategory = event.target.value as ConverterCategory;
    const nextUnits = getCategoryUnits(nextCategory);
    setCategory(nextCategory);
    setFromUnit(nextUnits[0].value);
    setToUnit(nextUnits[1].value);
  };

  return (
    <div className="card">
      <h2 className="panel-heading">Unit Converter</h2>
      <div className="control-card">
        <label htmlFor="category-selector">Category</label>
        <select id="category-selector" value={category} onChange={handleCategoryChange}>
          {categories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="control-card">
        <label htmlFor="from-unit">From</label>
        <select id="from-unit" value={fromUnit} onChange={(event) => setFromUnit(event.target.value as UnitKey)}>
          {units.map((unit) => (
            <option key={unit.value} value={unit.value}>
              {unit.label}
            </option>
          ))}
        </select>
      </div>

      <div className="control-card">
        <label htmlFor="to-unit">To</label>
        <select id="to-unit" value={toUnit} onChange={(event) => setToUnit(event.target.value as UnitKey)}>
          {units.map((unit) => (
            <option key={unit.value} value={unit.value}>
              {unit.label}
            </option>
          ))}
        </select>
      </div>

      <div className="control-card">
        <label htmlFor="converter-value">Value</label>
        <input
          id="converter-value"
          type="number"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Enter value"
          min="0"
        />
      </div>

      <div className="card" style={{ marginTop: '18px' }}>
        <div className="display-box">
          <p className="display-caption">Result</p>
          <p className="display-value">{output}</p>
        </div>
      </div>
    </div>
  );
};

export default ConverterPanel;
