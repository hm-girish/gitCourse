import { useState } from 'react';
import './App.css';
import CalculatorModeSelector from './components/CalculatorModeSelector';
import SimpleCalculator from './components/SimpleCalculator';
import ScientificCalculator from './components/ScientificCalculator';
import ProgrammerCalculator from './components/ProgrammerCalculator';
import ConverterPanel from './components/ConverterPanel';
import { CalculatorMode } from './types/calculator';

const modeLabels: Record<CalculatorMode, string> = {
  simple: 'Simple',
  scientific: 'Scientific',
  programmer: 'Programmer',
  converter: 'Converter'
};

function App() {
  const [mode, setMode] = useState<CalculatorMode>('simple');

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="app-tag">Multi-mode Calculator</p>
          <h1>Calculator App</h1>
        </div>
      </header>

      <main className="app-main">
        <section className="mode-panel">
          <CalculatorModeSelector modes={modeLabels} selectedMode={mode} onChange={setMode} />
        </section>

        <section className="calculator-panel">
          {mode === 'simple' && <SimpleCalculator />}
          {mode === 'scientific' && <ScientificCalculator />}
          {mode === 'programmer' && <ProgrammerCalculator />}
          {mode === 'converter' && <ConverterPanel />}
        </section>
      </main>
    </div>
  );
}

export default App;
