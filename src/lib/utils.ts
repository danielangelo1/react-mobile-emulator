type ClassValue = string | number | boolean | undefined | null | Record<string, boolean> | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter(Boolean)
    .map((input) => {
      if (typeof input === 'string' || typeof input === 'number') {
        return input;
      }
      if (Array.isArray(input)) {
        return cn(...input);
      }
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ');
}
