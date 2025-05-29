export const capitalizeFirstLetter = (text: string): string => {
  const trimmed = text.trimStart();
  if (!trimmed) return text;
  return text.replace(trimmed[0], trimmed[0].toUpperCase());
};
