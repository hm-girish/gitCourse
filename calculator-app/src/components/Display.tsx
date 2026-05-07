interface Props {
  expression: string;
  result: string;
  label: string;
}

const Display = ({ expression, result, label }: Props) => (
  <div className="display-box">
    <div>
      <p className="display-caption">{label}</p>
      <p className="display-value" data-testid="expression-display">
        {expression || '0'}
      </p>
    </div>
    <p className="display-caption">{result}</p>
  </div>
);

export default Display;
