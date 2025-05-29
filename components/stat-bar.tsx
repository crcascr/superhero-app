interface Props {
  label: string;
  value: number;
  color: string;
}

export const StatBar = ({ label, value, color }: Props) => (
  <div className="mb-2">
    <div className="flex justify-between text-sm mb-1">
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
      <span className="font-medium text-gray-900 dark:text-white">
        {value}/100
      </span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div
        className={`h-2 rounded-full ${color} transition-all duration-500`}
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);
