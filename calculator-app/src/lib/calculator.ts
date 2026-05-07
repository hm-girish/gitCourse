const replacements: Record<string, string> = {
  '×': '*',
  '÷': '/',
  '^': '**',
  'ln(': 'log(',
  '√': 'sqrt('
};

const allowedPattern = /^[0-9eE+\-*/().,%\sA-Za-z]+$/;

export const evaluateExpression = (input: string): string => {
  if (!input || !allowedPattern.test(input)) {
    throw new Error('Invalid expression');
  }

  const sanitized = Object.entries(replacements).reduce(
    (value, [key, replacement]) => value.split(key).join(replacement),
    input
  );

  const normalized = sanitized
    .replace(/log\(/g, 'log10(')
    .replace(/ln\(/g, 'log(')
    .replace(/π/g, 'PI');

  const context = {
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    log: Math.log,
    log10: Math.log10,
    sqrt: Math.sqrt,
    abs: Math.abs,
    PI: Math.PI,
    E: Math.E,
    pow: Math.pow,
    exp: Math.exp
  };

  // eslint-disable-next-line no-new-func
  const evaluator = new Function(
    ...Object.keys(context),
    `return ${normalized}`
  );

  const result = evaluator(...Object.values(context));
  if (Number.isFinite(result)) {
    return String(Number(result.toFixed(12)));
  }

  throw new Error('Numeric evaluation failed');
};
