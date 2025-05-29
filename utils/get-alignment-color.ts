interface Props {
  alignment: string;
}

export const getAlignmentColor = ({ alignment }: Props) => {
  switch (alignment?.toLowerCase()) {
    case "good":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "bad":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    case "neutral":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
  }
};
