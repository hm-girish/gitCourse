import { CalculatorMode } from '../types/calculator';

interface Props {
  modes: Record<CalculatorMode, string>;
  selectedMode: CalculatorMode;
  onChange: (mode: CalculatorMode) => void;
}

const CalculatorModeSelector = ({ modes, selectedMode, onChange }: Props) => {
  return (
    <div>
      <h2 className="panel-heading">Select calculator mode</h2>
      <div className="calculator-mode-selection">
        {Object.entries(modes).map(([key, label]) => {
          const mode = key as CalculatorMode;
          return (
            <button
              key={mode}
              type="button"
              className={`mode-option ${selectedMode === mode ? 'active' : ''}`}
              onClick={() => onChange(mode)}
            >
              <span>{label}</span>
              {selectedMode === mode ? '✔️' : '•'}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalculatorModeSelector;
