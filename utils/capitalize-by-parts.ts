export const capitalizeEachCommaSeparatedPart = (text: string): string => {
  return text
    .split(",")
    .map((part) => {
      const trimmed = part.trimStart();
      if (!trimmed) return part;
      return part.replace(trimmed[0], trimmed[0].toUpperCase());
    })
    .join(", ");
};
