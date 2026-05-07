interface KeypadProps {
  buttons: { label: string; value: string; ariaLabel?: string; strong?: boolean }[];
  onPress: (value: string) => void;
}

const Keypad = ({ buttons, onPress }: KeypadProps) => (
  <div className="button-grid">
    {buttons.map(({ label, value, ariaLabel, strong }) => (
      <button
        type="button"
        key={label}
        className={strong ? 'wide' : ''}
        aria-label={ariaLabel || label}
        onClick={() => onPress(value)}
      >
        {label}
      </button>
    ))}
  </div>
);

export default Keypad;
