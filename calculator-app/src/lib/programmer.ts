export interface ProgrammerFormatter {
  binary: string;
  octal: string;
  decimal: string;
  hex: string;
}

export const parseProgrammerValue = (value: string, base: number): number => {
  const parsed = parseInt(value, base);
  return Number.isNaN(parsed) ? 0 : parsed;
};

export const formatProgrammerDisplay = (value: number): ProgrammerFormatter => ({
  binary: value.toString(2),
  octal: value.toString(8),
  decimal: String(value),
  hex: value.toString(16).toUpperCase()
});
